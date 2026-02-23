"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "Services", href: "#services" },
  // { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#whyus" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/92 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-white font-black text-4xl tracking-[-0.03em]">
            Koon<span className="gradient-text">10</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white/60 hover:text-white text-sm font-semibold transition-colors duration-200 tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full gradient-bg-animated text-white text-sm font-bold hover:opacity-90 transition-opacity shadow-lg shadow-red-500/20"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden text-white/80 p-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0f0f0f]/98 backdrop-blur-xl border-t border-white/5 px-4 py-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center py-3.5 text-white/70 hover:text-white text-base font-semibold border-b border-white/5 last:border-0 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 w-full flex items-center justify-center px-5 py-3 rounded-full gradient-bg text-white text-sm font-bold"
            onClick={() => setMenuOpen(false)}
          >
            Start a Project
          </a>
        </div>
      )}
    </nav>
  );
}
