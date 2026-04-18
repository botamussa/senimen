"use client";

import { useState } from "react";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

interface MobileMenuProps {
  links: NavLink[];
  variant?: "b2c" | "b2b";
}

export default function MobileMenu({ links, variant = "b2c" }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button — visible only on mobile */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Меню"
      >
        <span
          className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Dropdown overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Dropdown menu */}
      <div
        className={`md:hidden fixed top-14 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-lg transition-all duration-200 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:text-[#1D6AF3] transition-colors"
              >
                {link.label}
              </a>
            ) : link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:text-[#1D6AF3] transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:text-[#1D6AF3] transition-colors"
              >
                {link.label}
              </a>
            )
          )}
          {variant === "b2c" && (
            <Link
              href="/partners"
              onClick={() => setOpen(false)}
              className="mt-1 px-3 py-3 bg-[#1D6AF3] text-white font-semibold rounded-xl text-center hover:bg-[#1558D6] transition-colors"
            >
              Для партнеров →
            </Link>
          )}
          {variant === "b2b" && (
            <a
              href="#apply"
              onClick={() => setOpen(false)}
              className="mt-1 px-3 py-3 bg-[#1D6AF3] text-white font-semibold rounded-xl text-center hover:bg-[#1558D6] transition-colors"
            >
              Оставить заявку →
            </a>
          )}
        </nav>
      </div>
    </>
  );
}
