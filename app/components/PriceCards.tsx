"use client"

import { motion } from "framer-motion"

export default function PriceCards() {
  const packages = [
    {
      id: "basic",
      name: "БАЗОВ",
      label: "ПАКЕТ",
      pricePerSqm: 22,
      currency: "EUR",
      description: "Подходящ за визуално оформление на пространството",
      addedValue: "Клиентът вижда общо разпределение, стил и цветова схема",
      features: ["Консултация с дизайнер", "Снемане на точни размери", "2D Разпределение", "3D Визуализации"],
      image: "/modern-mid-century-modern-interior-design-living-r.jpg",
      priceText: "Започва от",
      priceSubtext: "22,00 EUR на кв.м.",
      detailedDescription:
        "Пакетът БАЗОВ е идеален за клиенти, които искат да визуализират своето пространство преди ремонт. Получавате професионални 2D планове и реалистични 3D визуализации, които ви помагат да вземете информирано решение за стила и цветовата схема.",
    },
    {
      id: "standard",
      name: "СТАНДАРТЕН",
      label: "ПАКЕТ",
      pricePerSqm: 32,
      currency: "EUR",
      description: "Подходящ за реализация на проекта",
      addedValue: "Подробна документация за изпълнение",
      features: [
        "Консултация с дизайнер",
        "Снемане на точни размери",
        "2D Разпределение",
        "3D Визуализации",
        "Работна документация",
        "Количествени сметки и оферти",
      ],
      image: "/modern-mid-century-modern-interior-design-living-r.jpg",
      detailedDescription:
        "Пакетът СТАНДАРТЕН включва цялата необходима техническа документация за реализация на проекта. Получавате подробни схеми и планове, които строителната бригада може директно да използва за изпълнение на ремонта.",
    },
    {
      id: "premium",
      name: "ПРЕМИУМ",
      label: "ПАКЕТ",
      pricePerSqm: 45,
      currency: "EUR",
      note: "само за Бургас",
      description: "Подходящ за клиенти, които искат пълна услуга",
      addedValue: "Спестява време и гарантира точно изпълнение",
      features: [
        "Консултация с дизайнер",
        "Снемане на точни размери",
        "2D Разпределение",
        "3D Визуализации",
        "Работна документация",
        "Количествени сметки и оферти",
        "Авторски надзор",
      ],
      image: "/modern-mid-century-modern-interior-design-living-r.jpg",
      detailedDescription:
        "Пакетът ПРЕМИУМ предлага пълно обслужване от проектиране до реализация. Ние координираме работата със строителната бригада, осъществяваме технически надзор и гарантираме, че проектът се изпълнява точно според визията. Този пакет е достъпен само за обекти в град Бургас.",
    },
  ]
  return (
    <section className="relative section-padding bg-white overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('/dots-bg.jpg')] bg-repeat opacity-5 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="relative container">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            text-[16vw]
            sm:text-[12vw] 
            md:text-[8vw] 
            lg:text-[6vw]
            xl:text-[5vw]
            font-light text-[#c4c0b8]
            leading-none mb-16 text-left
            whitespace-normal break-words"          >
          ценови пакети
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              {/* Header */}
              <div className="bg-[#E8E4DC] px-6 py-4 text-center">
                <h3 className="text-2xl font-bold text-[var(--charcoal)] mb-1">{pkg.name}</h3>
                <p className="text-sm font-semibold text-[var(--earth)]">{pkg.label}</p>
              </div>

              {/* Image Background with Content */}
              <div
                className="relative flex-1 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${pkg.image})`,
                }}
              >
                <div className="p-8 flex flex-col h-full">
                  {/* Price */}
                  <div className="mb-8">
                    {pkg.pricePerSqm ? (
                      <>
                        <div className="flex items-baseline justify-center gap-2">
                          {/* <span className="text-sm font-semibold text-white/90">{pkg.currency}</span> */}
                          <span className="text-6xl font-bold text-white">{pkg.pricePerSqm}</span>
                          <span className="text-xl font-semibold text-white/90">,00</span>
                        </div>
                        <p className="text-center text-white/90 text-sm mt-2">кв.м.</p>
                      </>
                    ) : (
                      <>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-white mb-2">{pkg.priceText}</p>
                          <p className="text-sm text-white/90">{pkg.priceSubtext}</p>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white">
                        <span className="text-white/90 mt-1">▸</span>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <a
                    href={`/tseni`}
                    className="block w-full py-3 text-center text-white font-semibold border-2 border-white rounded hover:bg-white hover:text-[var(--charcoal)] transition-all duration-300"
                  >
                    Прочети повече
                  </a>

                  {/* Price Note */}
                  <p className="text-center text-white/70 text-xs mt-4">Посочената цена е БЕЗ ДДС</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
