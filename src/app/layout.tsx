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
  title: "MatePro - Mobile car wash and detailing, Melbourne",
  description:
    "Mobile car wash and detailing Melbourne-wide. Hand wash, interior and full details at your home or work. Clear prices by car size.",
  metadataBase: new URL("https://www.matepro.com.au"),
  openGraph: {
    title: "MatePro - Mobile car wash and detailing, Melbourne",
    description:
      "Your car detailed in your driveway, Melbourne-wide. Packages from $120.",
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
