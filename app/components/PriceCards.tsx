"use client"

import { motion } from "framer-motion"

export default function PriceCards() {
  const packages = [
    {
      id: "basic",
      name: "БАЗОВ",
      image: "/prices/price-basic.png", 
      link: "/tseni",
    },
    {
      id: "standard",
      name: "СТАНДАРТЕН",
      image: "/prices/price-standard.jpg", 
      link: "/tseni",
    },
    {
      id: "premium",
      name: "ПРЕМИУМ",
      image: "/prices/price-premium.jpg", 
      link: "/tseni",
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
            whitespace-normal break-words"
        >
          ценови пакети
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.a
              key={pkg.id}
              href={pkg.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="block overflow-hidden rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-auto object-cover"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
