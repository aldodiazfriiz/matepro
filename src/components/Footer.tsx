import Image from "next/image";
import { nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-off/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:gap-12 sm:py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            src="/brand/matepro-horizontal-on-dark.svg"
            alt="MatePro"
            width={140}
            height={40}
          />
          <p className="mt-4 max-w-xs text-off">
            {site.tagline}
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-off">Car wash</h3>
          <ul className="mt-2">
            {[...nav, { label: "Book a wash", href: "#book" }].map((item) => (
              <li key={item.href}>
                <a href={item.href} className="flex min-h-11 items-center text-off hover:text-lime">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-off">Contact</h3>
          <a href={site.phoneHref} className="mt-2 flex min-h-11 items-center text-off hover:text-lime">
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="flex min-h-11 items-center text-off hover:text-lime">
            {site.email}
          </a>
          <p className="flex min-h-11 items-center text-off">{site.area}</p>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 pb-10 text-xs text-off sm:flex-row sm:justify-between sm:px-8">
        <p>&copy; 2026 MatePro. All rights reserved.</p>
      </div>
    </footer>
  );
}
