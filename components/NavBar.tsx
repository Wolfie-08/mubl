"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/join", label: "Join Community" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-3 z-50">
      <nav className="nav-blur gradient-border relative flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 shadow-lg shadow-purple-500/10 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          MUBL
        </Link>
        <div className="hidden items-center gap-1 text-sm font-medium text-slate-200 sm:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1.5 transition hover:bg-white/10 ${
                  isActive ? "bg-white/15 text-white" : "text-slate-200"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-2 sm:hidden">
          <div className="flex items-center gap-1 overflow-x-auto text-xs font-semibold text-slate-200">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap rounded-full px-3 py-1 transition hover:bg-white/10 ${
                    isActive ? "bg-white/15 text-white" : "text-slate-200"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
