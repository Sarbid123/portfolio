"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const FORM_CONTENT = {
    fr: {
        title: "Contact",
        subtitle: "Une idée de projet ou une opportunité ? N'hésitez pas à me contacter.",
        name: "Nom",
        email: "Email",
        message: "Message",
        button: "Envoyer",
        success: "Message envoyé avec succès !",
        codeComment: "// Envoyez-moi un message",
    },
    en: {
        title: "Contact",
        subtitle: "Have a project idea or an opportunity? Feel free to contact me.",
        name: "Name",
        email: "Email",
        message: "Message",
        button: "Send",
        success: "Message sent successfully!",
        codeComment: "// Send me a message",
    },
};

export default function ContactForm() {
    const pathname = usePathname();
    const lang = pathname.startsWith("/en") ? "en" : "fr";
    const t = FORM_CONTENT[lang];

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [sent, setSent] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simulation envoi (API plus tard)
        console.log(form);
        setSent(true);

        setForm({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <section
            id="contact"
            className="scroll-mt-32 w-full py-24 px-6 lg:px-12 bg-white dark:bg-gray-950 transition-colors duration-300"
        >
            <div className="max-w-3xl mx-auto">
                {/* Titre */}
                <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                    {t.title}
                </h2>

                {/* Style développeur (commentaire) */}
                <p className="font-mono text-sm text-indigo-500 mb-6">
                    {t.codeComment}
                </p>

                <p className="text-gray-600 dark:text-gray-400 mb-10">
                    {t.subtitle}
                </p>

                {/* Card style "code editor" */}
                <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl overflow-hidden">

                    {/* Faux header type éditeur de code */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-950">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-3 text-xs font-mono text-gray-500">
                            contact-form.tsx
                        </span>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="p-6 sm:p-8 flex flex-col gap-6"
                    >
                        {/* Nom + Email en ligne pour gagner de la place */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="font-mono text-xs text-gray-500">
                                    {lang === "fr" ? "// nom" : "// name"}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder={t.name}
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition font-mono"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-mono text-xs text-gray-500">
                                    {lang === "fr" ? "// email" : "// email"}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={t.email}
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition font-mono"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-2">
                            <label className="font-mono text-xs text-gray-500">
                                {lang === "fr" ? "// message" : "// message"}
                            </label>
                            <textarea
                                name="message"
                                placeholder={t.message}
                                rows={4}
                                value={form.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none font-mono"
                            />
                        </div>

                        {/* Bouton style dev */}
                        <button
                            type="submit"
                            className="w-fit px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-mono text-sm tracking-wide transition shadow-md hover:shadow-indigo-500/20"
                        >
                            {lang === "fr" ? "> " + t.button : "> " + t.button}
                        </button>

                        {sent && (
                            <p className="font-mono text-green-500 text-sm">
                                {t.success}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}