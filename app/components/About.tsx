"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="relative section-padding overflow-hidden  bg-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/dots-bg.jpg')] bg-repeat opacity-5 pointer-events-none"
        aria-hidden="true"
      ></div>

      {/* Content */}
      <div className="relative container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-px bg-gray-400"></div>
              <p className="text-sm uppercase tracking-wider text-gray-600">
                КОИ СМЕ НИЕ
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              ИНТЕРИОРНО
              <br />
              СТУДИО TDM
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
              Добрият интериорен дизайн е много повече от красива визия, той директно
              засяга живота, чувствата и сетивата ни!
            </p>

            <button className="bg-[var(--earth)] hover:bg-[#7a6349] text-white px-8 py-4 rounded-sm flex items-center gap-2 w-fit transition-colors">
              Портфолио
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
