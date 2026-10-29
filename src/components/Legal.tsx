import { legal } from "@/lib/content";

type Doc = (typeof legal)["terms"];

export default function Legal({ doc }: { doc: Doc }) {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-32">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">{doc.title}</h1>
      <p className="mt-4 text-lg text-off">{doc.text}</p>
      <p className="mt-2 text-sm text-off">Last updated {legal.updated}</p>

      <div className="mt-10 space-y-10 sm:mt-12">
        {doc.sections.map((s) => (
          <div key={s.h}>
            <h2 className="text-xl font-bold">{s.h}</h2>
            {s.p.map((p) => (
              <p key={p} className="mt-3 text-off">
                {p}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
