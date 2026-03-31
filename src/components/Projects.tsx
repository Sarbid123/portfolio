"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const PROJECTS = {
    fr: {
        title: "Mes projets",
        intro: "Voici quelques projets sur lesquels j’ai travaillé.",
        items: [
            {
                title: "Portfolio Personnel",
                description:
                    "Un portfolio moderne développé avec Next.js et Tailwind CSS, incluant un mode sombre et une navigation multilingue.",
                tech: ["Next.js", "Tailwind CSS", "TypeScript"],
                live: "#",
                github: "#",
            },
        ],
    },
    en: {
        title: "My Projects",
        intro: "Here are some projects I’ve worked on.",
        items: [
            {
                title: "Personal Portfolio",
                description:
                    "A modern portfolio built with Next.js and Tailwind CSS, featuring dark mode and multilingual support.",
                tech: ["Next.js", "Tailwind CSS", "TypeScript"],
                live: "#",
                github: "#",
            },
        ],
    },
};

export default function Projects() {
    const pathname = usePathname();
    const lang = pathname.startsWith("/en") ? "en" : "fr";
    const content = PROJECTS[lang];

    return (
        <section className="w-full py-32 px-6 lg:px-12 bg-white dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-5xl mx-auto">

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center lg:text-left"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
                        {content.title}
                    </h2>

                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
                        {content.intro}
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-10">
                    {content.items.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300"
                        >

                            {/* Hover glow effect */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-6 text-sm font-medium">
                                    <a
                                        href={project.live}
                                        className="hover:underline text-indigo-600 dark:text-indigo-400"
                                    >
                                        🔗 {lang === "fr" ? "Voir le projet" : "Live"}
                                    </a>

                                    <a
                                        href={project.github}
                                        className="hover:underline"
                                    >
                                        💻 GitHub
                                    </a>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}