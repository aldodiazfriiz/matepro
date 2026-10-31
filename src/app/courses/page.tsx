import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Notify from "@/components/Notify";
import { courses } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mobile Car Detailing Course | MatePro",
  description:
    "Learn mobile car detailing the MatePro way: the wash, interiors, the gear and running the business. Online and at your own pace. Coming soon.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
        <section id="top" className="mx-auto max-w-7xl px-5 pt-28 sm:px-8 sm:pt-40">
          <span className="rise inline-flex items-center gap-2 rounded-full border border-off/10 bg-charcoal/70 py-1.5 pl-1.5 pr-4 text-sm text-off">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime text-night">
              <Icon name="note" className="h-4 w-4" />
            </span>
            {courses.badge}
          </span>
          <h1 className="rise rise-2 mt-6 text-[clamp(2.4rem,11vw,3rem)] font-extrabold leading-[1.02] tracking-tight sm:mt-7 sm:text-7xl xl:text-8xl">
            <span className="block">{courses.title[0]}</span>
            <span className="block">
              <span className="underline-lime">{courses.title[1]}</span>
            </span>
          </h1>
          <p className="rise rise-2 mt-5 max-w-xl text-base text-off sm:mt-6 sm:text-xl">{courses.text}</p>
          <div className="rise rise-3 mt-8">
            <a
              href="#notify"
              className="inline-flex h-14 w-full items-center justify-center rounded-full bg-lime px-8 text-base font-semibold text-night transition hover:brightness-95 sm:w-auto"
            >
              Tell me when it&rsquo;s out
            </a>
          </div>
          <div className="dark-zone rise rise-3 relative mt-12 aspect-[4/3] overflow-hidden rounded-[28px] sm:mt-16 sm:aspect-[21/9] sm:rounded-[40px]">
            <Image
              src="/photos/drone-foam.jpg"
              alt="A car covered in snow foam in a Melbourne driveway"
              fill
              priority
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">{courses.learn.title}</h2>
          </Reveal>
          <ul className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {courses.learn.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 70}>
                <div className="flex h-full flex-col rounded-[28px] border border-off/10 bg-charcoal/60 p-6 sm:p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime text-night">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-off">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
          <Reveal>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">{courses.who.title}</h2>
            <ul className="mt-8 space-y-3">
              {courses.who.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-lg">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime text-night">
                    <Icon name="tick" className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <Notify id="notify" action="/api/courses" title={courses.form.title} text={courses.form.text} />
      </main>
      <Footer />
    </>
  );
}
