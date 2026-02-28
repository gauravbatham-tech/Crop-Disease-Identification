"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // determine initial theme on mount (localStorage -> system pref)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // apply theme class and persist whenever it changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-zinc-900 shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl font-bold"
        >
          ☰
        </button>

        {/* TITLE */}
        <h1 className="text-xl font-bold text-green-700 dark:text-green-400">
          CropCare Advisor
        </h1>

        {/* LINKS */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#workflow">Workflow</a>
          <a href="#scope">Scope</a>
          <Link
            href="/recommend"
            className="text-green-700 dark:text-green-400 font-semibold"
          >
            Recommendations
          </Link>
          <Link
            href="/disease"
            className="text-green-700 dark:text-green-400 font-semibold"
          >
            Detect Disease
          </Link>
          {/* visible theme toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="text-xl"
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀"}
          </button>
        </div>
      </div>

      {/* HAMBURGER MENU (LEFT, LIMITED WIDTH) */}
      {menuOpen && (
        <div className="absolute left-0 top-full w-64 bg-white dark:bg-zinc-900 shadow-lg border-r animate-slideDown">
          <div className="flex flex-col p-4 gap-4 text-sm">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="text-left"
            >
              {theme === "light" ? "🌙 Dark Mode" : "☀ Light Mode"}
            </button>
            <button className="text-left">⚙ Settings</button>
            <button className="text-left">ℹ Project Info</button>
          </div>
        </div>
      )}
    </nav>
  );
}
