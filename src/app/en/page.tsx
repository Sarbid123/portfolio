import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ContactForm from "@/components/ContactForm";

export default function HomeEN() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <Hero />
      <ContactForm />
    </main>
  );
}
