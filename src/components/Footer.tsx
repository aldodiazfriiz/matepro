import Image from "next/image";
import Icon from "@/components/Icon";
import { nav, site, socials } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-off/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:gap-12 sm:py-16 sm:px-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
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
          <h3 className="font-semibold text-off">MatePro</h3>
          <ul className="mt-2">
            {[...nav, { label: "Book a wash", href: "/mobile-wash#book" }].map((item) => (
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
        <div>
          <h3 className="font-semibold text-off">Follow</h3>
          <ul className="mt-2 flex gap-2">
            {socials.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`MatePro on ${item.label}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-off/20 text-off hover:border-lime hover:text-lime"
                >
                  <Icon name={item.icon} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 pb-28 text-xs sm:pb-10 text-off sm:flex-row sm:justify-between sm:px-8">
        <p>&copy; 2026 MatePro. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="/terms" className="flex min-h-11 items-center hover:text-lime sm:min-h-0">Terms</a>
          <a href="/privacy" className="flex min-h-11 items-center hover:text-lime sm:min-h-0">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
