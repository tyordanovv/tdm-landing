"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "Как протича процесът на работа?",
    answer:
      "Процесът на работа включва четири основни етапа: Консултация – обсъждаме пространството и вашите идеи; Избор на пакет – Basic, Standard или Premium според нуждите ви; Проектиране – създаваме 2D/3D визуализации, избираме материали и цветове; Реализация – при Premium пакет осигуряваме координация със строителна бригада и технически надзор.",
  },
  {
    question: "За кого е подходящ пакет Basic?",
    answer:
      "Подходящ за визуално оформление на пространството. Клиентът придобива представа за общото разположение, стил и цветова схема на помещението, но 2D планът не съдържа достатъчно техническа информация.",
  },
  {
    question: "За кого е подходящ пакет Standard?",
    answer:
      "Пакетът съдърва всичко нужно за реализиране на проекта като надгражда Basic с план настилки, план софит, ел. и ВиК схеми, разгъвки на стени.",
  },
  {
    question: "За кого е подходящ пакет Premium?",
    answer:
      "Подсигуряване на доверен екип за точно изпълнение на обекта спрямо проекта. Техническият надзор от наша страна спестява време на клиента и се проследява процесът по изпълнението отблизо. За момента пакет PREMIUM би бил подходящ само за клиенти в гр. Бургас",
  },
  {
    question: "Работите ли и с мебели по поръчка?",
    answer:
      "Да, работим с мебели по поръчка и предлагаме индивидуални оферти според спецификите на всеки проект. Сътрудничим с качествени производители, за да създадем уникални решения, които отговарят точно на вашите нужди и визия.",
  },
  {
    question: "Колко време отнема един проект?",
    answer:
      "Времетраенето зависи от избрания пакет и сложността на проекта: Basic пакет обикновено отнема 1-2 месеца; Standard и Premium пакети изискват 2-3 месеца. При по-сложни проекти или специфични изисквания срокът може да бъде удължен, но винаги ви информираме предварително.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding bg-[var(--cream)]">
      <div className="container">
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
          често задавани въпроси
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                className="flex justify-between items-center w-full p-4 bg-white rounded-lg shadow-md focus:outline-none hover:bg-[var(--sand)] transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-[var(--charcoal)]">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[var(--earth)]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[var(--earth)]" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 p-4 bg-white rounded-lg shadow-md"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
