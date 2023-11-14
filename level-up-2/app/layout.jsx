import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
  weight:['600', '700'],
  subsets: ['latin-ext'],
  variable: '--font-nunito'
})

export const metadata = {
  title: 'Level Up',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<body className={`${nunito.className} bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300`}>
        <nav className="flex justify-between items-center p-2 bg-white shadow-md">
          <div className="flex-grow text-center">
            {/* Logo */}
            <img src="/logo1.png" alt="Level Up Logo" className="h-20 md:h-28" />
          
          </div>
        </nav>
        <main className="container mx-auto px-4 mt-8">
          {children}
        </main>
      </body>
    </html>
  )
}
