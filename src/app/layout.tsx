import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MatePro - Your fleet's best mate.",
  description:
    "The free app for Australian truck drivers and small fleets, plus mobile truck washing Melbourne-wide. Built by a working truck driver.",
  metadataBase: new URL("https://matepro.com.au"),
  openGraph: {
    title: "MatePro - Your fleet's best mate.",
    description:
      "Free app for truck drivers. Fleet tools for owners. Mobile truck wash, Melbourne-wide.",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
