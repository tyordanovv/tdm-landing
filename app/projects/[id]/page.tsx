"use client"

import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { projects } from "@/app/data/projects"
import { X } from "lucide-react"
import Navbar from "@/app/components/Navbar"
import ContactFormSection from "@/app/components/ContactFormSection"
import Footer from "@/app/components/Footer"
import { useState } from "react"

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const projectId = Number.parseInt(params.id as string)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Проектът не е намерен</h1>
          <button onClick={() => router.push("/portfolio")} className="text-[var(--earth)] hover:underline">
            Обратно към портфолиото
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 container text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-light mb-6 tracking-wide"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed tracking-wide"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        className="relative py-16 border-b border-[var(--sand)]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apartment-plan-6257405_1280-4ivrggrjAQ4yaoPU33xfVX8EI20RjN.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container">
          <h2 className="text-center text-[var(--earth)] text-sm uppercase tracking-widest mb-12">
            Параметри на проекта
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="mb-4 flex justify-center">
                <svg className="w-16 h-16 text-[var(--charcoal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2 text-[var(--charcoal)]">Тип:</h3>
              <p className="text-[var(--charcoal)]/70">{project.type}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="mb-4 flex justify-center">
                <svg className="w-16 h-16 text-[var(--charcoal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2 text-[var(--charcoal)]">Размери:</h3>
              <p className="text-[var(--charcoal)]/70">{project.size}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        {/* Background image - same as hero */}
        <div className="absolute inset-0">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
        </div>

        {/* Split layout */}
        <div className="relative z-10 w-full grid md:grid-cols-5">
          {/* Left side - Dark overlay with text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 bg-black/80 backdrop-blur-sm p-12 md:p-16 flex flex-col justify-center min-h-[600px]"
          >
            <p className="text-white/70 text-sm uppercase tracking-widest mb-4">Информация за</p>
            <h2 className="text-white text-4xl md:text-5xl font-light mb-8 tracking-wide">ПРОЕКТА</h2>
            <p className="text-white leading-relaxed text-base md:text-lg">{project.solutions}</p>
          </motion.div>

          {/* Right side - Image visible (no overlay) */}
          <div className="md:col-span-3 hidden md:block" />
        </div>
      </section>
      <section className="bg-[var(--cream)] py-20">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-light text-center mb-16 text-[var(--charcoal)]"
          >
            Галерия
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-[4/3] overflow-hidden shadow-md group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - изображение ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[var(--earth)] transition"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img
            src={selectedImage || "/placeholder.svg"}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <ContactFormSection />

      <Footer />
    </div>
  )
}
