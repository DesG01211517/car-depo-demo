import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Depo",
  description: "Warehousing app that lists all available cars",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-100">
          <nav className="flex justify-center w-100">
            <Link className="m-2 hover:text-red-700" href="/">
              Home
            </Link>
            <Link className="m-2 hover:text-red-700" href="/pages/management">
              Inventory
            </Link>
          </nav>
        </header>
        {children}
        <footer className="text-center">&copy; Codex January Cohort</footer>
      </body>
    </html>
  );
}
