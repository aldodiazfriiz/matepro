// Sends one or more emails in a single Resend batch request. Returns false if Resend isn't set up or the send fails.

type Email = {
  to: string[];
  subject: string;
  html: string;
  text: string;
  reply_to?: string;
};

export function team() {
  return (process.env.QUOTE_TO_EMAIL ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export async function send(emails: Email[]) {
  const { RESEND_API_KEY, QUOTE_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !team().length) {
    console.error("email not sent: RESEND_API_KEY or QUOTE_TO_EMAIL missing");
    return false;
  }

  const from = QUOTE_FROM_EMAIL || "MatePro <onboarding@resend.dev>";
  const res = await fetch("https://api.resend.com/emails/batch", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emails.map((e) => ({ from, ...e }))),
  }).catch(() => null);

  if (!res?.ok) {
    console.error("resend failed", res?.status, await res?.text().catch(() => ""));
    return false;
  }
  return true;
}
