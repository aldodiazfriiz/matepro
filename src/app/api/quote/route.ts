// Quote requests are emailed to QUOTE_TO_EMAIL through Resend.

const text = (v: unknown) => (typeof v === "string" ? v.trim().slice(0, 1000) : "");

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export async function POST(req: Request) {
  // The form posts JSON from the page, or a plain form post if its JS hasn't loaded yet
  const native = !req.headers.get("content-type")?.includes("application/json");
  const body = native
    ? Object.fromEntries(await req.formData().catch(() => new FormData()))
    : await req.json().catch(() => null);

  const reply = (ok: boolean, error?: string, status = 200) =>
    native
      ? Response.redirect(new URL(`/#quote-${ok ? "sent" : "error"}`, req.url), 303)
      : Response.json(ok ? { ok } : { ok, error }, { status });

  // Hidden field only bots fill in. Pretend it worked so they move on.
  if (text(body?.company)) return reply(true);

  const quote = {
    name: text(body?.name),
    phone: text(body?.phone),
    email: text(body?.email),
    suburb: text(body?.suburb),
    service: text(body?.service),
    details: text(body?.details),
  };

  if (!quote.name || !/^[\d\s+()-]{8,}$/.test(quote.phone) || !quote.suburb) {
    return reply(false, "Missing details", 400);
  }
  if (quote.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(quote.email)) {
    return reply(false, "Invalid email", 400);
  }

  const { RESEND_API_KEY, QUOTE_TO_EMAIL, QUOTE_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !QUOTE_TO_EMAIL) {
    console.error("quote request not sent: RESEND_API_KEY or QUOTE_TO_EMAIL missing", quote);
    return reply(false, "Not configured", 500);
  }

  const rows: [string, string][] = [
    ["Name", quote.name],
    ["Phone", quote.phone],
    ["Email", quote.email || "-"],
    ["Suburb", quote.suburb],
    ["Service", quote.service || "-"],
    ["Details", quote.details || "-"],
  ];

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: QUOTE_FROM_EMAIL || "MatePro Quotes <onboarding@resend.dev>",
      to: QUOTE_TO_EMAIL.split(",").map((s) => s.trim()),
      reply_to: quote.email || undefined,
      subject: `Quote request: ${quote.service || "Pressure washing"}, ${quote.suburb}`,
      text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
      html: `<table cellpadding="6" style="font-family:sans-serif;font-size:15px">${rows
        .map(
          ([k, v]) =>
            `<tr><td style="color:#666;vertical-align:top"><b>${k}</b></td><td style="white-space:pre-wrap">${escape(v)}</td></tr>`,
        )
        .join("")}</table>`,
    }),
  }).catch(() => null);

  if (!res?.ok) {
    console.error("resend failed", res?.status, await res?.text().catch(() => ""));
    return reply(false, "Send failed", 502);
  }

  return reply(true);
}
