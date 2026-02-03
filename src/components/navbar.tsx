import Link from "next/link";
import { Github, Facebook } from "lucide-react";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Projets", href: "/projects" },
];

export default function Navbar() {
  return (
    <nav className="relative flex items-center justify-between px-14 py-6">
      
      {/* Left navigation */}
      <ul className="flex list-none gap-10 text-sm font-medium">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-black hover:underline underline-offset-8"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Center logo */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white font-bold">
          SR
        </div>
      </div>

      {/* Right social icons */}
      <div className="flex items-center gap-6">
        <a
          href="#"
          aria-label="Facebook"
          className="text-gray-600 hover:text-black transition"
        >
          <Facebook size={18} />
        </a>
        <a
          href="#"
          aria-label="GitHub"
          className="text-gray-600 hover:text-black transition"
        >
          <Github size={18} />
        </a>
      </div>
    </nav>
  );
}
