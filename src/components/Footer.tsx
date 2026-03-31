export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 dark:border-gray-800 mt-20">
            <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Sarobidy. Tous droits réservés.
            </div>
        </footer>
    );
}