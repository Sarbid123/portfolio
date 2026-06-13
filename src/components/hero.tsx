/* eslint-disable @next/next/no-img-element */
"use client";

import { usePathname } from "next/navigation";
import TypingIntro from "@/components/TypingIntro";
import Link from "next/link";
import { useState } from "react";

const HERO_CONTENT = {
  fr: {
    title: (
      <>
        Transformer les idées <br className="hidden lg:block" />
        en réalité grâce au code <br className="hidden lg:block" />
        et au design.
      </>
    ),
    description:
      "Développeur full-stack passionné, je transforme des idées en applications web performantes et innovantes. Découvrez mes projets récents et mes articles, mettant en avant mon expertise en développement web.",
    resume: "CV ↗",
    contact: "Contact",
    role: "Développeur Web",
  },
  en: {
    title: (
      <>
        Turning ideas <br className="hidden lg:block" />
        into reality with code <br className="hidden lg:block" />
        and design.
      </>
    ),
    description:
      "Passionate full-stack developer, I turn ideas into high-performance and innovative web applications. Discover my latest projects and articles showcasing my web development expertise.",
    resume: "Resume ↗",
    contact: "Contact",
    role: "Web Developer",
  },
};

export default function Hero() {
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "fr";
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 lg:pb-20 transition-colors duration-300 bg-white dark:bg-gray-950">

      {/* Text */}
      <div className="w-full space-y-6 text-center lg:w-1/2 lg:text-left">
        <TypingIntro />
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-black dark:text-white sm:text-5xl">
          {HERO_CONTENT[lang].title}
        </h1>

        <p className="mx-auto max-w-xl text-base text-gray-700 dark:text-gray-300 sm:text-lg lg:mx-0">
          {HERO_CONTENT[lang].description}
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">

          {/* Bouton CV */}
          <div className="relative">
            <button
              onClick={() => setShowMenu((prev) => !prev)}
              className="flex items-center gap-2 rounded-lg bg-black text-white dark:bg-white dark:text-black px-6 py-3 text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Icône fichier */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
              </svg>

              <span>{lang === "fr" ? "Curriculum Vitae" : "Resume"}</span>

              {/* Chevron qui tourne */}
              <svg
                xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className={`transition-transform duration-300 ${showMenu ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {showMenu && (
              <div className="absolute left-0 top-[calc(100%+8px)] w-full min-w-max rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden shadow-lg z-50">

                <a
                  href="/fichiers/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowMenu(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition border-b border-gray-100 dark:border-gray-800"
                >
                  {/* Icône œil */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                  </svg>
                  <span>{lang === "fr" ? "Lire le CV" : "View Resume"}</span>
                </a>

                <a
                  href="/fichiers/resume.pdf"
                  download="CV_Sarobidy_Randrianjarihanta.pdf"
                  onClick={() => setShowMenu(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  {/* Icône téléchargement */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>{lang === "fr" ? "Télécharger" : "Download"}</span>
                </a>

              </div>
            )}
          </div>

          <Link
            href={lang === "fr" ? "/fr/contact" : "/en/contact"}
            className="font-medium underline underline-offset-4 text-black dark:text-white hover:opacity-70 transition"
          >
            {HERO_CONTENT[lang].contact}
          </Link>
        </div>
      </div >

      {/* Image */}
      < div className="relative group w-fit" >
        <img src="/images/profile.png" alt="Sarobidy Randrianjarihanta" className="w-[420px] rounded-xl object-cover shadow-lg" />

        <div className="absolute inset-0 flex items-end justify-center rounded-xl bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="mb-6 text-center translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <p className="text-white text-lg font-semibold">
              Sarobidy RANDRIANJARIHANTA
            </p>
            <p className="text-gray-200 text-sm">
              {HERO_CONTENT[lang].role}
            </p>
          </div>
        </div>
      </div >

    </section >
  );
}
