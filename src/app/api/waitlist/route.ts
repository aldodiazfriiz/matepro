// Waitlist signups. Not stored anywhere yet: wire this to an email list or database before launch.

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const role = typeof body?.role === "string" ? body.role : "driver";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  console.log("waitlist signup", { email, role, at: new Date().toISOString() });
  return Response.json({ ok: true });
}
