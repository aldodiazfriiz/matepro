// App sign-ups: MatePro gets a note and the person gets a "you're on the list" email.

import { appEmail, teamAppEmail } from "@/lib/emails";
import { send, team } from "@/lib/resend";

export async function POST(req: Request) {
  // JSON from the page, or a plain form post if its JS hasn't loaded yet
  const native = !req.headers.get("content-type")?.includes("application/json");
  const body = native
    ? Object.fromEntries(await req.formData().catch(() => new FormData()))
    : await req.json().catch(() => null);

  const reply = (ok: boolean, error?: string, status = 200) =>
    native
      ? Response.redirect(new URL(`/app#launch-${ok ? "sent" : "error"}`, req.url), 303)
      : Response.json(ok ? { ok } : { ok, error }, { status });

  // Hidden field only bots fill in
  if (typeof body?.company === "string" && body.company.trim()) return reply(true);

  const email = typeof body?.email === "string" ? body.email.trim().slice(0, 200) : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return reply(false, "Invalid email", 400);
  }

  const sent = await send([
    { to: team(), reply_to: email, ...teamAppEmail(email) },
    { to: [email], reply_to: team()[0], ...appEmail() },
  ]);

  return sent ? reply(true) : reply(false, "Send failed", 502);
}
