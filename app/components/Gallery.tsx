"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { projects } from "../data/projects"

const categories = ["All", "Modern", "Classic", "Minimal"]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="gallery" className="relative section-padding bg-white overflow-hidden">
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
            whitespace-normal break-words
          "        
          >
          портфолио
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12 flex-wrap gap-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category ? "bg-[var(--earth)] text-white" : "bg-[var(--sand)] text-[var(--charcoal)]"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden shadow-md"
            >
              <Link href={`/projects/${project.id}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-light mb-2">{project.title}</h3>
                    <span className="text-sm text-white/80">{project.category}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
