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
    },
    en: {
        title: "Contact",
        subtitle: "Have a project idea or an opportunity? Feel free to contact me.",
        name: "Name",
        email: "Email",
        message: "Message",
        button: "Send",
        success: "Message sent successfully!",
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

        // Simulation envoi (on branchera l'API après)
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
            className="scroll-mt-32 w-full py-32 px-6 lg:px-12 bg-white dark:bg-gray-950 transition-colors duration-300"
        >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {t.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-10">
                {t.subtitle}
            </p>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
            >
                <input
                    type="text"
                    name="name"
                    placeholder={t.name}
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />

                <input
                    type="email"
                    name="email"
                    placeholder={t.email}
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />

                <textarea
                    name="message"
                    placeholder={t.message}
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
                />

                <button
                    type="submit"
                    className="w-fit px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition"
                >
                    {t.button}
                </button>

                {sent && (
                    <p className="text-green-500 font-medium">
                        {t.success}
                    </p>
                )}
            </form>
        </section>
    );
}