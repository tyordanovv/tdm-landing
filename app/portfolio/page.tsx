"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import Navbar from "../components/Navbar"
import Gallery from "../components/Gallery"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
import ContactFormSection from "../components/ContactFormSection"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/project_bogoridi/bogoridi-2.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6 text-white leading-tight"
            >
              Нашето портфолио
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed tracking-wide"
            >
              Разгледайте завършените ни проекти и се вдъхновете за вашият бъдещ проект
            </motion.p>
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

      {/* Gallery Section */}
      <Gallery/>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Form Section */}
      <ContactFormSection />

      <Footer />
    </div>
  )
}
