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
  },
  en: {
    links: [
      { label: "Home", href: "/en" },
      { label: "About", href: "/en/about" },
      { label: "Projects", href: "/en/projects" },
    ],
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "fr";

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
        <div className="relative flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1 text-xs font-semibold">

          {/* Pill qui glisse */}
          <span
            className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-white dark:bg-gray-950 shadow transition-all duration-300 ${lang === "en" ? "left-1" : "left-[calc(50%+2px)]"
              }`}
          />

          {/* Bouton EN */}
          <Link
            href={pathname.replace(`/${lang}`, "/en")}
            className={`relative z-10 px-3 py-1 rounded-full transition-colors duration-300 ${lang === "en"
              ? "text-black dark:text-white"
              : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              }`}
          >
            EN
          </Link>

          {/* Bouton FR */}
          <Link
            href={pathname.replace(`/${lang}`, "/fr")}
            className={`relative z-10 px-3 py-1 rounded-full transition-colors duration-300 ${lang === "fr"
              ? "text-black dark:text-white"
              : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              }`}
          >
            FR
          </Link>

        </div>
      </div>
    </nav>
  );
}
