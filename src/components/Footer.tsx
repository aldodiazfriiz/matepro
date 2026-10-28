import Image from "next/image";
import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-off/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:gap-12 sm:py-16 sm:px-8 lg:grid-cols-3">
        <div>
          <Image
            src="/brand/matepro-horizontal-on-dark.svg"
            alt="MatePro"
            width={140}
            height={40}
          />
          <p className="mt-4 max-w-xs text-off/60">
            {site.tagline} Built by a working truck driver.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-off">
            Contact
          </h3>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 flex min-h-11 items-center text-xl font-semibold hover:text-lime"
          >
            {site.email}
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 pb-10 text-xs text-off/40 sm:flex-row sm:justify-between sm:px-8">
        <p>&copy; 2026 MatePro. All rights reserved.</p>
      </div>
    </footer>
  );
}
