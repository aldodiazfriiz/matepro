// Booking requests are emailed to QUOTE_TO_EMAIL through Resend, and the customer gets a confirmation.

import { customerEmail, teamEmail, type Booking } from "@/lib/emails";
import { send, team } from "@/lib/resend";

const text = (v: unknown) => (typeof v === "string" ? v.trim().slice(0, 1000) : "");

export async function POST(req: Request) {
  // JSON from the page, or a plain form post if its JS hasn't loaded yet
  const native = !req.headers.get("content-type")?.includes("application/json");
  const body = native
    ? Object.fromEntries(await req.formData().catch(() => new FormData()))
    : await req.json().catch(() => null);

  const reply = (ok: boolean, error?: string, status = 200) =>
    native
      ? Response.redirect(new URL(`/mobile-wash#book-${ok ? "sent" : "error"}`, req.url), 303)
      : Response.json(ok ? { ok } : { ok, error }, { status });

  // Hidden field only bots fill in
  if (text(body?.company)) return reply(true);

  const booking: Booking = {
    name: text(body?.name),
    phone: text(body?.phone),
    email: text(body?.email),
    suburb: text(body?.suburb),
    service: text(body?.service) || "Car wash",
    size: text(body?.size) || "-",
    details: text(body?.details),
  };

  if (!booking.name || !/^[\d\s+()-]{8,}$/.test(booking.phone) || !booking.suburb) {
    return reply(false, "Missing details", 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(booking.email)) {
    return reply(false, "Invalid email", 400);
  }

  const sent = await send([
    { to: team(), reply_to: booking.email, ...teamEmail(booking) },
    { to: [booking.email], reply_to: team()[0], ...customerEmail(booking) },
  ]);

  return sent ? reply(true) : reply(false, "Send failed", 502);
}
