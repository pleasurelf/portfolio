"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="w-9 h-9 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:border-indigo-400 hover:text-indigo-400 transition-all"
    >
      {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
