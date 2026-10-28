// Quote requests. Not stored anywhere yet: wire this to email or a database before launch.

const text = (v: unknown) => (typeof v === "string" ? v.trim().slice(0, 1000) : "");

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const quote = {
    name: text(body?.name),
    phone: text(body?.phone),
    suburb: text(body?.suburb),
    service: text(body?.service),
    details: text(body?.details),
  };

  if (!quote.name || !/^[\d\s+()-]{8,}$/.test(quote.phone) || !quote.suburb) {
    return Response.json({ ok: false, error: "Missing details" }, { status: 400 });
  }

  console.log("quote request", { ...quote, at: new Date().toISOString() });
  return Response.json({ ok: true });
}
