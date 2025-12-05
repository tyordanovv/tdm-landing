"use client"

import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PartnersMarquee from "../components/PartnersMarquee"
import ContactFormSection from "../components/ContactFormSection"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

const packages = [
  {
    id: "basic",
    name: "пакет BASIC",
    subtitle: "Визуално оформление на пространството",
    image: "/prices/price-basic.png", 
    description: `
      Идеален за клиенти, които искат да визуализират своето пространство преди ремонт.
      Получавате професионални 2D планове и реалистични 3D визуализации, които ви помагат
      да вземете информирано решение за стила и цветовата схема.
    `,
    price: "22 EUR / кв.м (с ДДС)",
  },
  {
    id: "standard",
    name: "пакет STANDARD",
    subtitle: "Реализация на проекта с пълна документация",
    image: "/prices/price-standard.jpg", 
    description: `
      Включва цялата необходима техническа документация за реализация на проекта.
      Получавате точни схеми и планове, които строителната бригада може директно да използва
      за изпълнение на ремонта с прецизност и последователност.
    `,
    price: "32 EUR / кв.м (с ДДС)",
  },
  {
    id: "premium",
    name: "пакет PREMIUM",
    subtitle: "Пълна услуга — от идея до реализация",
    image: "/prices/price-premium.jpg", 
    description: `
      Пълно обслужване от проектиране до реализация. Нашият екип координира изпълнението,
      осъществява технически надзор и гарантира, че проектът се реализира точно според визията.
      Подходящ за клиенти, които искат безкомпромисно качество и спокойствие. Пакетът важи само за проекти в град Бургас.
    `,
    price: "45 EUR / кв.м (с ДДС)",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/project_essenza/essenza-3.jpg"
            alt="About us background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white">
          <div className="container relative z-10"> 
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-center" > 
              <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} 
                className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6 text-white leading-tight" > 
                Цени    
              </motion.h1> 
              <motion.p initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed tracking-wide" > 
                Изберете пакета, който най-добре отговаря на вашите нужди и стил
              </motion.p> 
            </motion.div> 
          </div> 
            <motion.div 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", repeatDelay: 0.5, }} 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/80" 
            >
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/80"
        >
          <ChevronDown className="w-6 h-6" />
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Packages */}
      <main className="bg-white">
        {packages.map((pkg, index) => (
          <motion.section
            key={pkg.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`relative flex flex-col lg:flex-row items-center justify-between py-24 lg:py-40 ${
              index % 2 === 1 ? "bg-[#F9F8F6]" : "bg-white"
            }`}
          >
            {/* Image */}
            <div
            className={`w-full lg:w-1/2 flex justify-center ${
                index % 2 === 1 ? "order-last" : ""
            }`}
            >
            <div className="max-w-[500px] w-full px-8">
                <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-auto shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                />
            </div>
            </div>

            {/* Content */}
            <div
              className={`w-full lg:w-1/2 px-8 lg:px-16 mt-10 lg:mt-0 ${
                index % 2 === 1 ? "text-left" : "text-right"
              }`}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-light text-[var(--charcoal)] mb-4"
              >
                {pkg.name}
              </motion.h2>

              <p className="text-lg text-[var(--earth)] font-medium mb-6 italic">
                {pkg.subtitle}
              </p>

              <p className={`text-base text-gray-600 leading-relaxed mb-8 max-w-lg ${
                index % 2 === 1 ? "" : "ml-auto"
              }`}>
                {pkg.description}
              </p>

              <ul
                className={`space-y-3 text-gray-700 mb-6 ${
                  index % 2 === 1 ? "lg:pl-6" : "lg:pr-6"
                }`}
              >
              </ul>

              <div className="text-lg text-[var(--charcoal)] font-semibold tracking-wide">
                {pkg.price}
              </div>
            </div>
          </motion.section>
        ))}
      </main>

      {/* Partners + Contact */}
      <PartnersMarquee />
      <ContactFormSection />
      <Footer />
    </div>
  )
}