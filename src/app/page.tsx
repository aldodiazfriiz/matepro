import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
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
        <Wash />
        <Quote />
      </main>
      <Footer />
    </>
  );
}
