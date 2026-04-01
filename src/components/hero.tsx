/* eslint-disable @next/next/no-img-element */
"use client";

import { usePathname } from "next/navigation";
import TypingIntro from "@/components/TypingIntro";
import Link from "next/link";

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
          <a href="/resume.pdf" className="rounded-lg bg-black text-white dark:bg-white dark:text-black px-6 py-3 font-medium shadow-md hover:shadow-lg transition-all duration-300">
            {HERO_CONTENT[lang].resume}
          </a>

          <Link
            href={lang === "fr" ? "/fr/contact" : "/en/contact"}
            className="font-medium underline underline-offset-4 text-black dark:text-white hover:opacity-70 transition"
          >
            {HERO_CONTENT[lang].contact}
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="relative group w-fit">
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
      </div>

    </section>
  );
}
