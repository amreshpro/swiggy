import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Order Food Online in swiggy',
  description: 'A clone of swiggy , a food ordering site ',
  icons: {
    icon: {
      url: "/favicon.ico",
      type: "image/ico",
    },
    shortcut: { url: "/favicon.ico", type: "image/ico" },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}
    
      </body>

    </html>
  )
}
