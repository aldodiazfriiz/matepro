import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Wash from "@/components/Wash";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";
import Ticker from "@/components/Ticker";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Wash />
        <Quote />
      </main>
      <Footer />
    </>
  );
}
