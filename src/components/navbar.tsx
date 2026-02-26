"use client";

import { useEffect, useState } from "react";
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


  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
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
        <a href="#" aria-label="Facebook" className="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white transition">
          <Facebook size={18} />
        </a>

        <a href="#" aria-label="GitHub" className="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white transition">
          <Github size={18} />
        </a>

        <a href="#contact" aria-label="Contact" className="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white transition">
          <Mail size={18} />
        </a>

        <button onClick={toggleTheme} className="cursor-pointer transition">
          {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-indigo-500" />}
        </button>

        {/* Language switch */}
        <Link href={lang === "fr" ? pathname.replace("/fr", "/en") : pathname.replace("/en", "/fr")} className="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:underline">
          {NAV_CONTENT[lang].switchLabel}
        </Link>
      </div>
    </nav>
  );
}
