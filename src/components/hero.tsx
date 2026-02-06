"use client";

import { usePathname } from "next/navigation";

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
    <section className="flex min-h-[calc(100vh-96px)] flex-col-reverse items-center gap-12 px-6 py-10 lg:flex-row lg:justify-between lg:px-10">

      {/* Text */}
      <div className="w-full space-y-6 text-center lg:w-1/2 lg:text-left">
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl text-gray-900 dark:text-gray-100">
          {HERO_CONTENT[lang].title}
        </h1>

        <p className="mx-auto max-w-xl text-base text-gray-700 dark:text-gray-300 sm:text-lg lg:mx-0">
          {HERO_CONTENT[lang].description}
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
          <a href="/resume.pdf" className="rounded-lg bg-gray-900 px-6 py-3 font-medium text-white dark:bg-gray-100 dark:text-black transition hover:opacity-90">
            {HERO_CONTENT[lang].resume}
          </a>

          <a href="#contact" className="font-medium underline underline-offset-4 text-gray-900 dark:text-gray-100">
            {HERO_CONTENT[lang].contact}
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="relative group w-fit">
        <img src="/images/profile.png" alt="Sarobidy Randrianjarihan­ta" className="w-[420px] rounded-lg object-cover" />

        <div className="absolute inset-0 flex items-end justify-center rounded-lg bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="mb-6 text-center translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <p className="text-white text-lg font-semibold">Sarobidy RANDRIANJARIHANTA</p>
            <p className="text-gray-200 text-sm">{HERO_CONTENT[lang].role}</p>
          </div>
        </div>
      </div>

    </section>
  );
}
