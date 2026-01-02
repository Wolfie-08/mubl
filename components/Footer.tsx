import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-slate-950 to-slate-900 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur md:flex-row md:items-center">
          {/* Left */}
          <div className="space-y-1">
            <p className="text-base font-semibold text-white">
              MUBL — Mirzo Ulugh Beg&apos;s Legacy
            </p>
            <p className="text-sm text-slate-300">
              A student-led engineering and research community.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-wrap gap-6 text-sm text-slate-300">
            <Link
              href="https://t.me/marvelousacosmos"
              className="transition hover:text-white"
            >
              Telegram
            </Link>
            <Link
              href="https://mubl.uz"
              className="transition hover:text-white"
            >
              Website
            </Link>
            <Link
              href="https://www.linkedin.com/company/mirzo-ulugh-beg-s-legacy"
              className="transition hover:text-white"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
