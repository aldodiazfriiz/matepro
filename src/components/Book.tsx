import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { book, site } from "@/lib/content";

export default function Book() {
  return (
    <section id="book" className="relative scroll-mt-24 px-4 pb-16 sm:px-6 sm:pb-32">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-lime px-5 py-12 text-night sm:rounded-[40px] sm:px-12 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">{book.title}</h2>
          <p className="mt-4 text-lg text-night">{book.text}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#prices"
              className="inline-flex h-14 w-full items-center justify-center rounded-full bg-night px-8 text-base font-semibold text-off transition hover:bg-black sm:w-auto"
            >
              Pick a package
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border border-night/25 px-8 text-base font-semibold text-night transition hover:bg-night/[0.06] sm:w-auto"
            >
              <Icon name="phone" className="h-5 w-5" />
              {site.phone}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
