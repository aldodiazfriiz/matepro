import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { faq } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{faq.title}</h2>
        <p className="mt-4 text-lg text-off">{faq.text}</p>
      </Reveal>

      <div className="mt-12 space-y-3">
        {faq.items.map((item, i) => (
          <Reveal key={item.q} delay={i * 40}>
            <details className="faq group rounded-3xl border border-off/10 bg-charcoal/60 transition open:bg-charcoal">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-semibold sm:px-7">
                {item.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-off/10 transition group-open:rotate-180 group-open:bg-lime group-open:text-night">
                  <Icon name="chevron" className="h-4 w-4" />
                </span>
              </summary>
              <p className="px-6 pb-6 text-off sm:px-7">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
