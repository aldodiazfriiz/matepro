import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "FAQ - MatePro mobile car wash and detailing, Melbourne",
  description: "Answers to common questions about MatePro: where we go, car sizes, prices, payments and booking.",
};

export default function FaqPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip pt-16 sm:pt-12">
        <Faq />
      </main>
      <Footer />
    </>
  );
}
