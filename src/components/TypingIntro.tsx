"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const TEXT_CONTENT = {
    fr: [
        "Salut, moi c'est Sarobidy",
        "Passionné par l'IA & le Web",
    ],
    en: [
        "Hi, I'm Sarobidy",
        "Passionate about AI & Web",
    ],
};

export default function TypingIntro() {
    const pathname = usePathname();
    const lang = pathname.startsWith("/en") ? "en" : "fr";
    const texts = TEXT_CONTENT[lang];

    const [displayText, setDisplayText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentText = texts[textIndex];

        const typingTimeout = setTimeout(() => {
            if (charIndex < currentText.length) {
                setDisplayText((prev) => prev + currentText[charIndex]);
                setCharIndex((prev) => prev + 1);
            } else {
                const loopTimeout = setTimeout(() => {
                    setDisplayText("");
                    setCharIndex(0);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }, 1800);

                return () => clearTimeout(loopTimeout);
            }
        }, 50);

        return () => clearTimeout(typingTimeout);
    }, [charIndex, textIndex, texts]); // 👈 texts dépend déjà de la langue

    return (
        <div className="font-mono font-semibold text-indigo-500 dark:text-indigo-400 text-lg sm:text-xl md:text-2xl mb-4 tracking-wide">
            <span className="mr-2">{">"}</span>
            {displayText}
            <span className="animate-pulse ml-1">|</span>
        </div>
    );
}