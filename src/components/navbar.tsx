"use client";

import { useEffect, useState, useLayoutEffect } from "react";
import Link from "next/link";
import { Github, Facebook, Mail, Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";

const NAV_CONTENT = {
  fr: {
    links: [
      { label: "Accueil", href: "/fr" },
      { label: "À propos", href: "/fr/about" },
      { label: "Projets", href: "/fr/projects" },
    ],
    switchLabel: "EN",
  },
  en: {
    links: [
      { label: "Home", href: "/en" },
      { label: "About", href: "/en/about" },
      { label: "Projects", href: "/en/projects" },
    ],
    switchLabel: "FR",
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "fr";

  /*
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  */

  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    // eslint-disable-next-line
    setDarkMode(isDark);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode, mounted]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };


  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-14 py-6 bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-900 backdrop-blur-xl transition-colors duration-300">

      {/* Navigation */}
      <ul className="flex gap-10 text-sm font-medium">
        {NAV_CONTENT[lang].links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={`text-gray-900 dark:text-gray-100 hover:underline underline-offset-8 ${pathname === link.href ? "underline font-semibold" : ""}`}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right icons */}
      <div className="flex items-center gap-6">
        <a href="https://www.facebook.com/SarbidRandr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white transition">
          <Facebook size={18} />
        </a>

        <a href="https://github.com/Sarbid123" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white transition">
          <Github size={18} />
        </a>

        <Link
          href={lang === "fr" ? "/fr/contact" : "/en/contact"}
          aria-label="Contact"
          className="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white transition"
        >
          <Mail size={18} />
        </Link>

        <button onClick={toggleTheme} className="cursor-pointer transition">
          {mounted ? (
            darkMode
              ? <Sun size={18} className="text-yellow-400" />
              : <Moon size={18} className="text-indigo-500" />
          ) : (
            <div className="w-[18px] h-[18px]" />
          )}
        </button>

        {/* Language switch */}
        <Link href={lang === "fr" ? pathname.replace("/fr", "/en") : pathname.replace("/en", "/fr")} className="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:underline">
          {NAV_CONTENT[lang].switchLabel}
        </Link>
      </div>
    </nav>
  );
}
