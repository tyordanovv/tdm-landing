"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const navItems = [
  { name: "Начало", href: "/" },
  { name: "За нас", href: "/za-nas" },
  { name: "Портфолио", href: "/portfolio" },
  { name: "Цени", href: "/tseni" },
  { name: "Контакти", href: "/kontakti" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent text-white"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`${isScrolled ? "" : "brightness-0 invert"}`}
              >
                <Image
                  src="/logo_no_bg.png"
                  alt="TDM Interior Studio"
                  width={180}
                  height={60}
                  className="h-12 w-auto"
                  priority
                />
              </motion.div>
            </Link>
          </div>
          {/* */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-light transition-colors duration-300"
                  onClick={(e) => {
                    if (item.href.startsWith("/#")) {
                      e.preventDefault()
                      const targetId = item.href.slice(2)
                      const targetElement = document.getElementById(targetId)
                      if (targetElement) {
                        const yOffset = -80
                        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset
                        window.scrollTo({ top: y, behavior: "smooth" })
                      }
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--charcoal)] hover:text-[var(--earth)] hover:bg-[var(--sand)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--earth)]"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[var(--charcoal)] hover:text-[var(--earth)] block px-3 py-2 rounded-md text-base font-medium"
                onClick={(e) => {
                  if (item.href.startsWith("/#")) {
                    e.preventDefault()
                    setIsOpen(false)
                    const targetId = item.href.slice(2)
                    const targetElement = document.getElementById(targetId)
                    if (targetElement) {
                      const yOffset = -80
                      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset
                      window.scrollTo({ top: y, behavior: "smooth" })
                    }
                  } else {
                    setIsOpen(false)
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
