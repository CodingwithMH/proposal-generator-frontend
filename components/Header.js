"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link
          href="/"
          className="text-xl font-bold bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
        >
          ProposaAI
        </Link>

        <Link
          href="/generate"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-lg bg-linear-to-r from-green-600 to-emerald-600 text-sm font-medium text-white shadow-md hover:shadow-lg hover:scale-[1.05] transition-all"
        >
          Get Started
        </Link>

      </div>
    </header>
  );
}