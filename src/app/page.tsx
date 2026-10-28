import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AppSection from "@/components/AppSection";
import AppPreview from "@/components/AppPreview";
import Fleet from "@/components/Fleet";
import Wash from "@/components/Wash";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";
import Ticker from "@/components/Ticker";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <AppSection />
        <AppPreview />
        <Fleet />
        <Wash />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
