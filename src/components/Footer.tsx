"use client";

import { usePathname } from "next/navigation";

const FOOTER_CONTENT = {
    fr: {
        rights: "Tous droits réservés.",
    },
    en: {
        rights: "All rights reserved.",
    },
};

export default function Footer() {
    const pathname = usePathname();
    const lang = pathname.startsWith("/en") ? "en" : "fr";
    const content = FOOTER_CONTENT[lang];

    return (
        <footer className="w-full border-t border-gray-200 dark:border-gray-800 mt-20">
            <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Sarobidy. {content.rights}
            </div>
        </footer>
    );
}