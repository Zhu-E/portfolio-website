import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio | Coding Projects",
  description: "A showcase of my personal coding projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gray-900`}
      >
        <header className="border-b border-gray-700 py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-white">
              My Portfolio
            </Link>
            <nav>
              <ul className="flex space-x-6 items-center">
                <li>
                  <Link href="/" className="text-white hover:text-gray-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/resume.pdf" 
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        
        {/* <footer className="border-t border-gray-200 py-6 mt-auto">
          <div className="container mx-auto px-4 text-center text-gray-500">
            <p>© {new Date().getFullYear()} My Portfolio - All rights reserved</p>
          </div>
        </footer> */}
      </body>
    </html>
  );
}
