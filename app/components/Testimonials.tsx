"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Мария Д.",
    role: "Апартамент, София",
    content: "Благодаря ти! Кухнята е супер и е точно това, което исках!",
    rating: 5,
  },
  {
    id: 2,
    name: "Георги П.",
    role: "Къща, Пловдив",
    content: "Браво, много ми харесва! Остава първият вариант, няма смисъл да променяме нищо.",
    rating: 5,
  },
  {
    id: 3,
    name: "Елена С.",
    role: "Офис, Варна",
    content: "Всичко ми харесва, наистина. Няма нещо, което да искам да променя.",
    rating: 5,
  },
  {
    id: 4,
    name: "Иван М.",
    role: "Апартамент, Бургас",
    content: "Нямам търпение да седна на дивана, да си направя кафе и да се насладя.",
    rating: 5,
  },
]

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="p-4 bg-[var(--earth)]">
      <div className="container mx-auto px-4">
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
          какво казват наши клиенти
        </motion.h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `${-currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-[var(--wood)] mb-6 text-lg leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                    <div className="flex items-center pt-4 border-t border-gray-100">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--earth)] to-[#8B7355] text-white flex items-center justify-center font-semibold text-lg mr-4 shadow-md">
                        {getInitials(testimonial.name)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--charcoal)] text-lg">{testimonial.name}</h4>
                        <div className="w-16 h-0.5 bg-[var(--earth)] my-1"></div>
                        <p className="text-[var(--wood)] text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-[var(--earth)] hover:bg-[var(--earth)] hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-[var(--earth)] hover:bg-[var(--earth)] hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? "bg-white" : "bg-white/40"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
