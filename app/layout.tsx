import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import ScrollToTop from "./components/ScrollToTop"
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tdm-interior-design.com"),
  title: "ТДМ Интериорен Дизайн Бургас | Модерен и Луксозен Интериор",
  description:
    "ТДМ Интериорен Дизайн в Бургас – професионални решения за дом, офис и заведения. 3D визуализации, обзавеждане и цялостни интериорни проекти.",
  keywords: [
    "интериорен дизайн Бургас",
    "интериорно студио",
    "дизайнер на интериори",
    "мебели по поръчка",
    "ТДМ интериорен дизайн",
    "3D визуализация",
    "обзавеждане Бургас",
    "луксозен интериор",
  ],
  openGraph: {
    title: "ТДМ Интериорен Дизайн Бургас | Модерен и Луксозен Интериор",
    description:
      "Професионално студио за интериорен дизайн в Бургас. Реализираме проекти за дом, офис и заведения с индивидуален стил и високо качество.",
    url: "https://www.tdm-interior-design.com",
    siteName: "ТДМ Интериорен Дизайн",
    // images: [
    //   {
    //     url: "https://yourdomain.bg/images/og-cover.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "ТДМ Интериорен Дизайн Бургас – модерен и луксозен интериор",
    //   },
    // ],
    locale: "bg_BG",
    type: "website",
  },
  alternates: {
    canonical: "https://www.tdm-interior-design.com",
  },
  other: {
    "geo.region": "BG-02", // Бургас
    "geo.placename": "Бургас",
    "geo.position": "42.497;27.470",
    "ICBM": "42.497, 27.470",
  },
};

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
