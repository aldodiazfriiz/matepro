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
  title: "MatePro - Mobile truck wash, Melbourne",
  description:
    "Mobile truck washing Melbourne-wide. Prime movers, trailers, B-doubles and fleets hand washed at your depot overnight. Fixed prices, fleet rates.",
  metadataBase: new URL("https://www.matepro.com.au"),
  openGraph: {
    title: "MatePro - Mobile truck wash, Melbourne",
    description:
      "Trucks hand washed at your depot overnight, Melbourne-wide. Fixed prices.",
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
