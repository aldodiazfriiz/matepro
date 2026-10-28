// Quote requests are emailed to QUOTE_TO_EMAIL through Resend, and the customer gets a confirmation.

import { customerEmail, teamEmail, type Quote } from "@/lib/emails";
import { send, team } from "@/lib/resend";

const text = (v: unknown) => (typeof v === "string" ? v.trim().slice(0, 1000) : "");

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

  const quote: Quote = {
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
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(quote.email)) {
    return reply(false, "Invalid email", 400);
  }

  // One request: the lead to MatePro, and the "we've got your request" confirmation to the customer
  const [to] = team();
  const sent = await send([
    { to: team(), reply_to: quote.email, ...teamEmail(quote) },
    { to: [quote.email], reply_to: to, ...customerEmail(quote) },
  ]);

  return sent ? reply(true) : reply(false, "Send failed", 502);
}
