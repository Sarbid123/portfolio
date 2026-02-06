import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

export default function HomeFR() {
  return (
    <main>
      <Navbar />
      <Hero />

      <section id="contact" className="py-32 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-gray-600">
          Le formulaire de contact arrive bientôt 🚧
        </p>
      </section>
    </main>
  );
}
