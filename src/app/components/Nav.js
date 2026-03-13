"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("theme");

    if (stored) {
      setTheme(stored);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

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
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur border-b z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-xl font-bold text-indigo-600">
          AgroVision
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

          <Link href="/disease" className="hover:text-indigo-600">
            Detect Disease
          </Link>



          <a href="#about" className="hover:text-indigo-600">
            About
          </a>

        </div>

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-4">

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="text-lg"
          >
            {theme === "light" ? "🌙" : "☀"}
          </button>

          <Link
            href="/login"
            className="text-sm font-medium hover:text-indigo-600"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700"
          >
            Sign Up
          </Link>

        </div>

      </div>
    </nav>
  );
}