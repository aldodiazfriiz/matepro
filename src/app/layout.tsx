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
  title: "MatePro - Mobile pressure washing, Melbourne",
  description:
    "Mobile pressure washing Melbourne-wide. Truck, bus and heavy machinery washing, concrete and driveway cleaning, car parks and commercial. Free quotes.",
  metadataBase: new URL("https://www.matepro.com.au"),
  openGraph: {
    title: "MatePro - Mobile pressure washing, Melbourne",
    description:
      "Truck, bus, machinery and concrete washing. We come to you, Melbourne-wide.",
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
