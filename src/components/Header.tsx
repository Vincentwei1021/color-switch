"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(false);
  useEffect(() => { setDark(document.documentElement.classList.contains("dark")); }, []);
  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-gray-50/80 backdrop-blur-xl dark:border-gray-700/60 dark:bg-gray-900/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link href="/" className="font-[family-name:var(--font-heading)] text-xl font-bold text-pink-600 tracking-tight dark:text-pink-400">🎨 ColorSwitch</Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link href="/#converter" className="text-sm font-medium text-gray-600 transition-colors hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400">Converter</Link>
          <Link href="/#faq" className="text-sm font-medium text-gray-600 transition-colors hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400">FAQ</Link>
          <Link href="/blog" className="text-sm font-medium text-gray-600 transition-colors hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400">Blog</Link>
          <button onClick={toggleDark} className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700" aria-label="Toggle dark mode">
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>
    </header>
  );
}
