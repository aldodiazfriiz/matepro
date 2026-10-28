import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import SectionLinks from "@/components/SectionLinks";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MatePro - The free app for Aussie truck drivers",
  description:
    "Truck stops, diesel prices, pre-starts and expenses in one place. Free for every driver, built by a working truck driver. Join the list for launch day.",
  metadataBase: new URL("https://www.matepro.com.au"),
  openGraph: {
    title: "MatePro - The free app for Aussie truck drivers",
    description:
      "Truck stops, diesel prices, pre-starts and expenses in one place. Free for every driver.",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <SectionLinks />
      </body>
    </html>
  );
}
