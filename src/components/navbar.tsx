"use client";

import { useEffect, useState, useLayoutEffect } from "react";
import Link from "next/link";
import { Github, Facebook, Mail, Sun, Moon, Menu, X } from "lucide-react";
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

// Composant séparé, en dehors de Navbar()
function LangToggle({
  lang,
  pathname,
  onNavigate,
}: {
  lang: "fr" | "en";
  pathname: string;
  onNavigate: () => void;
}) {
  return (
    <div className="relative flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1 text-xs font-semibold">
      <span
        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-white dark:bg-gray-950 shadow transition-all duration-300 ${lang === "en" ? "left-1" : "left-[calc(50%+2px)]"
          }`}
      />
      <Link href={pathname.replace(`/${lang}`, "/en")} onClick={onNavigate} className={`relative z-10 px-3 py-1 rounded-full transition-colors duration-300 ${lang === "en" ? "text-black dark:text-white" : "text-gray-400"}`}>
        EN
      </Link>
      <Link href={pathname.replace(`/${lang}`, "/fr")} onClick={onNavigate} className={`relative z-10 px-3 py-1 rounded-full transition-colors duration-300 ${lang === "fr" ? "text-black dark:text-white" : "text-gray-400"}`}>
        FR
      </Link>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "fr";
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 lg:px-14 py-4 lg:py-6 bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-900 backdrop-blur-xl transition-colors duration-300">

      {/* Liens — desktop seulement */}
      <ul className="hidden lg:flex gap-10 text-sm font-medium">
        {NAV_CONTENT[lang].links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={`text-gray-900 dark:text-gray-100 hover:underline underline-offset-8 whitespace-nowrap ${pathname === link.href ? "underline font-semibold" : ""}`}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Burger — mobile/écran réduit seulement */}
      <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" className="lg:hidden text-gray-900 dark:text-gray-100">
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Icônes + thème + langue — desktop seulement */}
      <div className="hidden lg:flex items-center gap-6">
        <a href="https://www.facebook.com/SarbidRandr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white transition">
          <Facebook size={18} />
        </a>
        <a href="https://github.com/Sarbid123" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white transition">
          <Github size={18} />
        </a>
        <Link href={lang === "fr" ? "/fr/contact" : "/en/contact"} aria-label="Contact" className="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white transition">
          <Mail size={18} />
        </Link>
        <button onClick={toggleTheme} className="cursor-pointer transition" aria-label="Theme">
          {mounted ? (darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-indigo-500" />) : <div className="w-[18px] h-[18px]" />}
        </button>
        <LangToggle lang={lang} pathname={pathname} onNavigate={() => setMenuOpen(false)} />
      </div>

      {/* Menu déroulant — mobile/écran réduit seulement */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-900 flex flex-col items-center gap-6 py-8 lg:hidden">
          {NAV_CONTENT[lang].links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-gray-900 dark:text-gray-100 font-medium">
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-6">
            <a href="https://www.facebook.com/SarbidRandr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-800 dark:text-gray-300">
              <Facebook size={20} />
            </a>
            <a href="https://github.com/Sarbid123" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-800 dark:text-gray-300">
              <Github size={20} />
            </a>
            <Link href={lang === "fr" ? "/fr/contact" : "/en/contact"} onClick={() => setMenuOpen(false)} aria-label="Contact" className="text-gray-800 dark:text-gray-300">
              <Mail size={20} />
            </Link>
            <button onClick={toggleTheme} aria-label="Theme">
              {mounted ? (darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-indigo-500" />) : <div className="w-5 h-5" />}
            </button>
          </div>

          <LangToggle lang={lang} pathname={pathname} onNavigate={() => setMenuOpen(false)} />
        </div>
      )}
    </nav>
  );
}