import Link from "next/link";

const socials = [
  { href: "https://t.me/marvelousacosmos", label: "Telegram" },
  { href: "https://mubl.uz", label: "Website" },
  { href: "https://www.linkedin.com/company/mirzo-ulugh-beg-s-legacy", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 shadow-inner shadow-purple-900/20">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">MUBL — Mirzo Ulugh Beg's Legacy</p>
          <p className="text-sm text-slate-300">A student-led engineering and research community.</p>
        </div>
        <div className="flex gap-3 text-sm text-slate-200">
          {socials.map((social) => (
            <Link key={social.href} href={social.href} className="underline-offset-4 hover:text-white hover:underline">
              {social.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
