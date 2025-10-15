import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import ScrollToTop from "./components/ScrollToTop"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Luxor Interior Design",
  description: "Transform your space with Luxor Interior Design",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
