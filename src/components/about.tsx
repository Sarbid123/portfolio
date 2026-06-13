"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const ABOUT_CONTENT = {
    fr: {
        title: "À propos",
        intro:
            "Développeur Web passionné par la création d'applications web modernes, performantes et innovantes.",
        timeline: [
            {
                year: "2023 - Présent",
                title: "Développeur Web",
                description:
                    "Étudiant en Master Informatique spécialisé en Génie Logiciel et Intelligence Artificielle à l'ISPM. Dynamique et curieux, je maîtrise des technologies comme React, Next.js, Python et JavaScript, avec des notions en Machine Learning. Je suis actuellement à la recherche d'une opportunité pour continuer à évoluer et contribuer à des projets web ambitieux."
            },
            {
                year: "Objectif",
                title: "Ingénieur Full-Stack & IA",
                description:
                    "Construire des applications intelligentes combinant développement web, intelligence artificielle et expériences utilisateur avancées.",
            },
        ],
    },
    en: {
        title: "About",
        intro:
            "Web developer passionate about building modern, high-performance and innovative web applications.",
        timeline: [
            {
                year: "2023 - Present",
                title: "Web Developer",
                description:
                    "Master's student in Computer Science specializing in Software Engineering and Artificial Intelligence at ISPM. Driven and curious, I work with technologies such as React, Next.js, Python and JavaScript, with a background in Machine Learning. I am currently looking for an opportunity to keep growing and contribute to ambitious web projects."
            },
            {
                year: "Goal",
                title: "Full-Stack & AI Engineer",
                description:
                    "Creating intelligent and scalable applications that combine web development, AI and advanced user experiences.",
            },
        ],
    },
};

export default function About() {
    const pathname = usePathname();
    const lang = pathname.startsWith("/en") ? "en" : "fr";
    const content = ABOUT_CONTENT[lang];

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

                {/* Timeline */}
                <div className="relative border-l border-gray-200 dark:border-gray-800 pl-8 space-y-12">
                    {content.timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >

                            {/* Dot */}
                            <div className="absolute -left-[42px] top-2 w-4 h-4 rounded-full bg-black dark:bg-white"></div>

                            {/* Content */}
                            <div className="space-y-2">
                                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                                    {item.year}
                                </span>
                                <h3 className="text-xl font-semibold text-black dark:text-white">
                                    {item.title}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}