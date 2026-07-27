
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ShieldCheck,
} from "lucide-react";

const navLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Education",
    href: "#education",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================
            Main Navbar
        ========================== */}
        <div className="h-16 sm:h-20 flex items-center justify-between">

          {/* =========================
              Logo
          ========================== */}
          <Link
            href="/"
            onClick={closeMenu}
            className="
              text-lg
              sm:text-xl
              md:text-2xl
              font-bold
              text-amber-400
              hover:text-amber-300
              transition
              whitespace-nowrap
            "
          >
            Mannan's Portfolio
          </Link>


          {/* =========================
              Desktop Navigation
          ========================== */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">

            <div className="flex items-center gap-5 lg:gap-8 text-sm font-medium text-slate-300">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    relative
                    py-2
                    hover:text-amber-400
                    transition-colors
                  "
                >
                  {link.name}
                </a>
              ))}

            </div>


            {/* Admin Button */}
            <Link
              href="/login"
              className="
                inline-flex
                items-center
                gap-2
                bg-amber-500
                hover:bg-amber-400
                text-slate-950
                px-4
                lg:px-5
                py-2
                rounded-xl
                text-sm
                font-semibold
                transition
                shadow-lg
                shadow-amber-500/10
              "
            >
              <ShieldCheck size={17} />
              Admin
            </Link>

          </div>


          {/* =========================
              Mobile Actions
          ========================== */}
          <div className="md:hidden flex items-center gap-2">

            {/* Mobile Admin */}
            <Link
              href="/login"
              className="
                inline-flex
                items-center
                gap-1.5
                bg-amber-500
                hover:bg-amber-400
                text-slate-950
                px-3
                sm:px-4
                py-2
                rounded-lg
                text-xs
                sm:text-sm
                font-semibold
                transition
              "
            >
              <ShieldCheck size={16} />
              Admin
            </Link>


            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              className="
                w-10
                h-10
                flex
                items-center
                justify-center
                rounded-lg
                border
                border-slate-700
                text-slate-300
                hover:text-amber-400
                hover:border-amber-400
                transition
              "
            >
              {menuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>

          </div>

        </div>


        {/* =========================
            Mobile Menu
        ========================== */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-300
            ease-in-out
            ${
              menuOpen
                ? "max-h-[500px] opacity-100 pb-5"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <div className="border-t border-slate-800 pt-4">

            <div className="flex flex-col gap-1">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="
                    px-4
                    py-3
                    rounded-xl
                    text-sm
                    font-medium
                    text-slate-300
                    hover:bg-slate-800
                    hover:text-amber-400
                    transition
                  "
                >
                  {link.name}
                </a>
              ))}

            </div>

          </div>

        </div>

      </div>

    </nav>
  );
}

