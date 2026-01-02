import Link from "next/link";

const socials = [
  { href: "https://t.me/marvelousacosmos", label: "Telegram" },
  { href: "https://mubl.uz", label: "Website" },
  { href: "https://www.linkedin.com/company/mirzo-ulugh-beg-s-legacy", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-10 text-slate-100">
      <div className="grid gap-10 md:grid-cols-3 md:gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-aurora/90 via-dusk/80 to-rose-400/80 text-base font-semibold text-slate-900 shadow-lg shadow-purple-500/30">
              M
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-200">MUBL</p>
              <p className="text-lg font-semibold text-slate-50">Mirzo Ulugh Beg's Legacy</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-300">
            Mirzo Ulugh Beg’s Legacy — A student-led engineering and research community inspired by
            curiosity, science, and the legacy of the great astronomer.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-300">Quick Links</h3>
          <div className="grid gap-3 text-sm text-slate-200">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-lg transition hover:text-white hover:underline hover:underline-offset-4"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-aurora/80" aria-hidden />
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-300">Connect</h3>
          <div className="flex flex-wrap gap-3">
            {socials.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-slate-100 transition hover:bg-white/10 hover:text-white"
              >
                {social.icon}
                <span className="sr-only">{social.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6">
        <p className="text-center text-xs text-slate-400">
          © 2026 MUBL | Mirzo Ulugh Beg&apos;s Legacy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
