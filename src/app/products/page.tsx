import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Notify from "@/components/Notify";
import { shop } from "@/lib/content";

export const metadata: Metadata = {
  title: "MatePro shop - Car wash and detailing products",
  description:
    "The MatePro range of car wash chemicals and accessories. Snow foam, shampoo, wheel cleaner, glass cleaner and more. Coming soon.",
};

function Products({ title, items }: { title: string; items: { slug: string; name: string; text: string }[] }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
      <Reveal>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
      </Reveal>
      <ul className="mt-8 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:mt-10 sm:gap-4 lg:grid-cols-4">
        {items.map((p, i) => (
          <Reveal as="li" key={p.slug} delay={(i % 4) * 70}>
            <a
              href="#notify"
              className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-off/10 bg-charcoal/60 transition duration-300 hover:-translate-y-1 hover:border-lime/40 sm:rounded-[28px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={`/products/${p.slug}.jpg`}
                  alt={`MatePro ${p.name}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute left-3 top-3 rounded-full bg-lime px-3 py-1 text-xs font-semibold text-night sm:left-4 sm:top-4">
                  {shop.badge}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h3 className="text-base font-semibold leading-snug sm:text-xl">{p.name}</h3>
                <p className="mt-1.5 flex-1 text-sm text-off sm:text-base">{p.text}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-lime">
                  Notify me
                  <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export default function ShopPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
        <section id="top" className="mx-auto max-w-7xl px-5 pt-28 sm:px-8 sm:pt-40">
          <span className="rise inline-flex items-center gap-2 rounded-full border border-off/10 bg-charcoal/70 py-1.5 pl-1.5 pr-4 text-sm text-off">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime text-night">
              <Icon name="tag" className="h-4 w-4" />
            </span>
            {shop.badge}
          </span>
          <h1 className="rise rise-2 mt-6 text-[clamp(2.4rem,11vw,3rem)] font-extrabold leading-[1.02] tracking-tight sm:mt-7 sm:text-7xl xl:text-8xl">
            <span className="block">{shop.title[0]}</span>
            <span className="block">
              <span className="underline-lime">{shop.title[1]}</span>
            </span>
          </h1>
          <p className="rise rise-2 mt-5 max-w-xl text-base text-off sm:mt-6 sm:text-xl">{shop.text}</p>
          <div className="rise rise-3 mt-8">
            <a
              href="#notify"
              className="inline-flex h-14 w-full items-center justify-center rounded-full bg-lime px-8 text-base font-semibold text-night transition hover:brightness-95 sm:w-auto"
            >
              Tell me when it&rsquo;s out
            </a>
          </div>
          <div className="rise rise-3 relative mt-12 aspect-[21/9] overflow-hidden rounded-[28px] sm:mt-16 sm:rounded-[40px]">
            <Image
              src="/products/range.jpg"
              alt="The MatePro range: snow foam, car shampoo, wheel cleaner, glass cleaner, interior detailer, tyre shine, quick detailer and bug and tar remover"
              fill
              priority
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover"
            />
          </div>
        </section>

        <Products title={shop.chemicals.title} items={shop.chemicals.items} />
        <Products title={shop.accessories.title} items={shop.accessories.items} />

        <div className="pt-8 sm:pt-16">
          <Notify id="notify" action="/api/shop" title={shop.form.title} text={shop.form.text} />
        </div>
      </main>
      <Footer />
    </>
  );
}
