import Link from "next/link";

type QuickLink = {
  href: string;
  label: string;
};

type SocialLink = {
  href: string;
  label: string;
  icon: JSX.Element;
};

const quickLinks: QuickLink[] = [
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
];

const socials: SocialLink[] = [
  {
    href: "https://t.me/marvelousacosmos",
    label: "Telegram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M20.884 3.648c.507-.182.983.297.8.803l-3.595 9.98a1 1 0 0 1-1.438.53l-3.228-1.874a.25.25 0 0 0-.242 0l-2.893 1.65a.75.75 0 0 1-1.115-.555l-.95-6.06a.5.5 0 0 1 .34-.553l13.32-3.92Z"
        />
      </svg>
    ),
  },
  {
    href: "https://mubl.uz",
    label: "Website",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm5.294 7.5h-2.87c-.122-.92-.308-1.8-.552-2.607a10.2 10.2 0 0 1-.585-1.7 8.282 8.282 0 0 1 4.007 4.307ZM9.363 12a11.7 11.7 0 0 1 .187-1.5h4.9c.093.485.16.984.2 1.5h-5.287Zm5.286 1.5c-.04.516-.107 1.015-.2 1.5h-4.9A11.7 11.7 0 0 1 9.363 13.5h5.286Zm-3.514-6.357c.198-.46.406-.884.623-1.263.152-.268.306-.517.462-.747.157.23.31.48.462.747.217.379.425.802.623 1.263.246.57.445 1.204.585 1.857h-3.34c.14-.653.34-1.287.585-1.857Z"
        />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/mirzo-ulugh-beg-s-legacy",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M19 3.5H5a1.5 1.5 0 0 0-1.5 1.5v14A1.5 1.5 0 0 0 5 20.5h14a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 19 3.5ZM8.18 17H6.1v-7h2.08v7ZM7.14 9.1a1.2 1.2 0 1 1 1.22-1.2 1.2 1.2 0 0 1-1.22 1.2Zm9.86 7.9h-2.08v-3.73c0-.92-.33-1.55-1.16-1.55-.63 0-1.01.42-1.17.83a2.15 2.15 0 0 0-.1.7V17H10.4v-7h2v1a2.25 2.25 0 0 1 2-1.1c1.35 0 2.54.9 2.54 2.82V17Z"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pt-10 text-slate-700">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white">
                MUBL
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Mirzo Ulugh Beg&apos;s Legacy
                </p>
                <p className="text-xs text-slate-500">
                  Student-led engineering & research
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              A student-led engineering and research community inspired by
              curiosity, science, and the legacy of the great astronomer.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-800">
              Quick Links
            </h3>
            <div className="grid gap-3 text-sm">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-600 transition hover:text-slate-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-800">
              Connect
            </h3>
            <div className="flex gap-3">
              {socials.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition hover:bg-slate-200 hover:text-slate-900"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-center text-xs text-slate-500">
            © 2026 MUBL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
