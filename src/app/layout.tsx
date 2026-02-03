import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Développeur Web",
  description: "Turning Vision Into Reality With Code And Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
