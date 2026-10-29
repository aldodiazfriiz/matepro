import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Legal from "@/components/Legal";
import { legal } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy policy - MatePro",
  description: "How MatePro collects, uses and looks after your details.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip pt-16 sm:pt-12">
        <Legal doc={legal.privacy} />
      </main>
      <Footer />
    </>
  );
}
