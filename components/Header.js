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
          ? "bg-slate-950/70 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold bg-linear-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent tracking-tight"
        >
          ProposaAI
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <Link href="#features" className="hover:text-cyan-400 transition">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-cyan-400 transition">
            Pricing
          </Link>
          <Link href="/generate" className="hover:text-cyan-400 transition">
            Generate
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="/generate"
          className="hidden md:inline-flex px-5 py-2 rounded-lg bg-linear-to-r from-cyan-500 to-indigo-500 text-sm font-medium text-white shadow-md shadow-cyan-500/20 hover:scale-[1.05] transition-all duration-200"
        >
          Get Started
        </Link>

      </div>
    </header>
  );
}