import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wählemer Kerwe',
  description: 'Wählemer Kerwe 2026',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={`${inter.className} min-h-screen bg-stone-50 text-stone-900 flex flex-col`}>
        {/* Navigation */}
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="font-bold text-xl text-red-600">
                  Wählemer Kerwe
                </Link>
              </div>
              <div className="hidden sm:flex sm:items-center sm:space-x-8">
                <Link href="/" className="text-stone-600 hover:text-red-600 transition">Programm</Link>
                <Link href="/anfahrt" className="text-stone-600 hover:text-red-600 transition">Anfahrt</Link>
                <Link href="/beitritt" className="text-stone-600 hover:text-red-600 transition">Mitglied werden</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Global Footer */}
        <footer className="bg-stone-900 text-stone-400 py-8 mt-12">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© {new Date().getFullYear()} Kerweverein Bohnestegge e.V.</p>
            <div className="flex space-x-6 text-sm">
                <Link href="/impressum" className="hover:text-white transition">Impressum</Link>
                <Link href="/datenschutz" className="hover:text-white transition">Datenschutz</Link>
                <a href="https://www.facebook.com/kerwe.wahlen" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Facebook</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
