import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

export default function HomeEN() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <Hero />

      <section id="contact" className="py-32 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Contact form coming soon 🚧
        </p>
      </section>
    </main>
  );
}
