import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MUBL — Mirzo Ulugh Beg's Legacy",
  description:
    "Student-led engineering and research community inspired by curiosity, science, and legacy.",
  openGraph: {
    title: "MUBL — Mirzo Ulugh Beg's Legacy",
    description:
      "Student-led engineering and research community inspired by curiosity, science, and legacy.",
    url: "https://mubl.uz",
    siteName: "MUBL",
    images: [
      {
        url: "/images/space-fest-placeholder.svg",
        width: 1200,
        height: 630,
        alt: "MUBL community",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}> 
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-4 pb-12 pt-6 md:px-8">
          <NavBar />
          <main className="flex-1 space-y-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
