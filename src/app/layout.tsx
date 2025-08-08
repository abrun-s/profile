import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import '@fortawesome/fontawesome-free/css/all.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adam Brunson - Developer & Motion Graphics Artist",
  description: "Portfolio showcasing web development and motion graphics work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
