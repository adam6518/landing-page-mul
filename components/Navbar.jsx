"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#111111]/95 text-white backdrop-blur-md">
      <div className="mx-auto flex min-h-[68px] max-w-[1600px] items-center justify-between px-5 py-3 sm:px-6 md:min-h-[76px] md:px-10">
        {/* Logo */}
        <a
          href="#"
          onClick={closeMenu}
          className="text-lg font-black tracking-tight sm:text-xl"
          aria-label="MUL homepage"
        >
          MUL<span className="text-yellow-400">.</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 text-xs font-bold uppercase tracking-widest lg:flex xl:gap-9">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-yellow-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 bg-yellow-400 px-4 py-3 text-[11px] font-black uppercase text-black transition-colors hover:bg-white lg:flex xl:px-5"
        >
          Start a project
          <ArrowUpRight size={15} />
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center border border-white/20 transition-colors hover:bg-yellow-400 hover:text-black lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/15 bg-[#111111] px-5 pb-6 pt-5 lg:hidden">
          <nav className="flex flex-col">
            {navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`flex items-center justify-between py-4 text-sm font-bold uppercase tracking-widest ${
                  index !== navigation.length - 1
                    ? "border-b border-white/15"
                    : ""
                }`}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={17} />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-5 flex items-center justify-between bg-yellow-400 px-4 py-4 text-xs font-black uppercase text-black"
          >
            Start a project
            <ArrowUpRight size={17} />
          </a>
        </div>
      )}
    </header>
  );
}
