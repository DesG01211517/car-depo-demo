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
        <header>
          <nav className="text-center">
            <Link href="/">Home</Link>

            <Link href="/pages/management">Inventory</Link>

            <Link href="/pages/about/">About</Link>
          </nav>
        </header>
        {children}
        <footer>&copy; Codex January Cohort</footer>
      </body>
    </html>
  );
}
