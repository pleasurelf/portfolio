"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { label: "home", href: "/" },
  { label: "projects", href: "/projects" },
  { label: "about", href: "/#about" },
  { label: "contact", href: "/#contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md">
      <div className="container-section flex items-center justify-between py-5">
        <a href="/" className="text-indigo-500 dark:text-indigo-400 text-sm font-semibold tracking-wide">
          jennifersbody.net
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-zinc-500 text-sm hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors capitalize"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X size={18} className="text-zinc-500" />
            ) : (
              <>
                <span className="w-5 h-px bg-zinc-400 dark:bg-zinc-500" />
                <span className="w-5 h-px bg-zinc-400 dark:bg-zinc-500" />
                <span className="w-5 h-px bg-zinc-400 dark:bg-zinc-500" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu — absolute overlay, doesn't shift page content */}
      {open && (
        <div className="md:hidden absolute right-0 top-full border border-zinc-200 dark:border-zinc-800 bg-stone-50 dark:bg-zinc-950 px-6 py-4 flex flex-col items-end gap-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-zinc-500 text-sm hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors capitalize"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
