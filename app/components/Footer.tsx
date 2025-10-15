"use client"

import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-bold mb-4">TDM Interior Design</h3>
            <p className="mb-4 text-[var(--sand)]">Хармония между стил и функционалност</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[var(--earth)] transition duration-300">
                <Facebook />
              </Link>
              <Link href="#" className="hover:text-[var(--earth)] transition duration-300">
                <Instagram />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[var(--earth)] transition duration-300">
                  Начало
                </Link>
              </li>
              <li>
                <Link href="/za-nas" className="hover:text-[var(--earth)] transition duration-300">
                  За нас
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-[var(--earth)] transition duration-300">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-[var(--earth)] transition duration-300">
                  Ценоразпис
                </Link>
              </li>
              <li>
                <Link href="/kontakti" className="hover:text-[var(--earth)] transition duration-300">
                  Контакти
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#pricing" className="hover:text-[var(--earth)] transition duration-300">
                  Basic пакет
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-[var(--earth)] transition duration-300">
                  Standard пакет
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-[var(--earth)] transition duration-300">
                  Premium пакет
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--earth)] transition duration-300">
                  Мебели по поръчка
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-xl font-semibold mb-4">Контакти</h4>
            <div className="space-y-2 text-[var(--sand)]">
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Бургас, ул. Кооператор 35
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+359894666363" className="hover:text-[var(--earth)] transition">
                  +359 894 666 363
                </a>
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+359899111033" className="hover:text-[var(--earth)] transition">
                  +359 899 111 033
                </a>
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:tdmids10@gmail.com" className="hover:text-[var(--earth)] transition">
                  tdmids10@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
        <div className="border-t border-[var(--wood)] mt-8 pt-8 text-center">
          <p className="text-[var(--sand)]">
            &copy; {new Date().getFullYear()} TDM Interior Design. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  )
}
