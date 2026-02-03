import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex min-h-[calc(100vh-96px)] flex-col-reverse items-center gap-12 px-6 py-10 lg:flex-row lg:justify-between lg:px-10">

            {/* Text */}
            <div className="w-full space-y-6 text-center lg:w-1/2 lg:text-left">
                <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
                    Transformer les idées <br className="hidden lg:block" />
                    en réalité grâce au code <br className="hidden lg:block" />
                    et au design.
                </h1>

                <p className="mx-auto max-w-xl text-base text-gray-600 sm:text-lg lg:mx-0">
                    Développeur full-stack passionné, je transforme des idées en applications web performantes et innovantes. Découvrez mes projets récents et mes articles, mettant en avant mon expertise en développement web.
                </p>

                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                    <a
                        href="/resume.pdf"
                        className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
                    >
                        CV ↗
                    </a>

                    <a
                        href="/contact"
                        className="font-medium underline underline-offset-4"
                    >
                        Contact
                    </a>
                </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <Image
                    src="/images/profile.png"
                    alt="Developer portrait"
                    width={420}
                    height={420}
                    priority
                    className="select-none"
                />
            </div>
        </section>
    );
}
