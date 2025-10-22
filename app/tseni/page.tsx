"use client"

import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PartnersMarquee from "../components/PartnersMarquee"
import ContactFormSection from "../components/ContactFormSection"

const packages = [
  {
    id: "basic",
    name: "БАЗОВ ПАКЕТ",
    subtitle: "Визуално оформление на пространството",
    image: "/prices/price-basic.png", 
    description: `
      Идеален за клиенти, които искат да визуализират своето пространство преди ремонт.
      Получавате професионални 2D планове и реалистични 3D визуализации, които ви помагат
      да вземете информирано решение за стила и цветовата схема.
    `,
    features: [
      "Консултация с дизайнер",
      "Снемане на точни размери",
      "2D Разпределение",
      "3D Визуализации",
    ],
    price: "22 EUR / кв.м (без ДДС)",
  },
  {
    id: "standard",
    name: "СТАНДАРТЕН ПАКЕТ",
    subtitle: "Реализация на проекта с пълна документация",
    image: "/prices/price-standard.jpg", 
    description: `
      Включва цялата необходима техническа документация за реализация на проекта.
      Получавате точни схеми и планове, които строителната бригада може директно да използва
      за изпълнение на ремонта с прецизност и последователност.
    `,
    features: [
      "Консултация с дизайнер",
      "Снемане на точни размери",
      "2D Разпределение",
      "3D Визуализации",
      "Работна документация",
      "Количествени сметки и оферти",
    ],
    price: "32 EUR / кв.м (без ДДС)",
  },
  {
    id: "premium",
    name: "ПРЕМИУМ ПАКЕТ",
    subtitle: "Пълна услуга — от идея до реализация",
    image: "/prices/price-premium.jpg", 
    description: `
      Пълно обслужване от проектиране до реализация. Нашият екип координира изпълнението,
      осъществява технически надзор и гарантира, че проектът се реализира точно според визията.
      Подходящ за клиенти, които искат безкомпромисно качество и спокойствие.
    `,
    features: [
      "Консултация с дизайнер",
      "Снемане на точни размери",
      "2D Разпределение",
      "3D Визуализации",
      "Работна документация",
      "Количествени сметки и оферти",
      "Авторски надзор",
    ],
    price: "45 EUR / кв.м (само за Бургас)",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/project_essenza/essenza-3.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-6">Ценови пакети</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Изберете пакета, който най-добре отговаря на вашите нужди и стил
          </p>
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

              <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-lg ml-auto mr-auto lg:ml-0 lg:mr-0">
                {pkg.description}
              </p>

              <ul
                className={`space-y-3 text-gray-700 mb-6 ${
                  index % 2 === 1 ? "lg:pl-6" : "lg:pr-6"
                }`}
              >
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm tracking-wide">
                    <span className="text-[var(--earth)]">•</span>
                    {feature}
                  </li>
                ))}
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