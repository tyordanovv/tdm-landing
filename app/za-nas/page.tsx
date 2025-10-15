"use client"

import { motion } from "framer-motion"
import { Calendar, Package, Pencil, Hammer, CheckCircle, Sofa, ChevronDown } from "lucide-react"
import Navbar from "./../components/Navbar"
import Footer from "./../components/Footer"
import TeamSection from "./../components/TeamSection"
import ContactFormSection from "./../components/ContactFormSection"
import PartnersMarquee from "./../components/PartnersMarquee"

const workProcess = [
  {
    icon: Calendar,
    title: "Първа среща и консултация",
    description:
      "Уговаряме удобен ден и час за среща, на която обсъждаме пространството, идеите и представите ви за бъдещия интериор. Споделяме съвети и насоки, за да намерим най-подходящото решение за вашия дом или обект.",
  },
  {
    icon: Package,
    title: "Представяне на пакетите",
    description:
      "Разясняваме подробно различните ни пакети услуги – Basic, Standard и Premium – като заедно избираме този, който най-добре отговаря на вашите нужди и очаквания.",
  },
  {
    icon: Pencil,
    title: "Начало на съвместната работа",
    description:
      "При одобрение от ваша страна и избор на пакет, се заплаща аванс в размер на 50% от общата стойност (цена на кв.м). След това насрочваме посещение на обекта за взимане на точни размери.",
  },
  {
    icon: Hammer,
    title: "Проектиране и развитие на идеята",
    description:
      "Стартираме работата по проекта, като сроковете варират според пакета: Basic – 1 до 2 месеца, Standard – 2 до 3 месеца, Premium – същият срок като при Standard, но с включена координация със строителна бригада. През целия процес сме в постоянна връзка с вас и обсъждаме всеки детайл.",
  },
  {
    icon: CheckCircle,
    title: "Финализиране",
    description:
      "Подготвяме финален файл, съдържащ цялата информация за проекта – пълен наръчник за реализирането му. След приключване на работата и вашето одобрение се извършва финалното плащане на останалата част от сумата.",
  },
  {
    icon: Sofa,
    title: "Изработка на мебели по поръчка",
    description:
      "При интерес изготвяме индивидуална оферта за мебели спрямо финалните уточнения. След полагане на настилките посещаваме обекта отново за точни размери. Срокът за изработка е приблизително 40 работни дни и може да варира в зависимост от заетостта на производството.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/5ta/5-ta-15.jpg')`,
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
              За нас
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed tracking-wide"
            >
              Вярваме, че всеки проект започва със споделен разговор и ясно разбиране за мечтите и нуждите на клиента
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

      <section
        className="relative py-24 px-4 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apartment-plan-6257405_1280-4ivrggrjAQ4yaoPU33xfVX8EI20RjN.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--charcoal)] mb-4">Нашият процес на работа</h2>
            <p className="text-lg text-[var(--charcoal)]/70 max-w-3xl mx-auto leading-relaxed">
              Вярваме, че всеки проект започва със споделен разговор и ясно разбиране за мечтите и нуждите на клиента.
              Ето как протича съвместната ни работа:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {workProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--sand)] rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-[var(--earth)]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[var(--earth)] mb-1">Стъпка {index + 1}</div>
                    <h3 className="text-lg font-bold text-[var(--charcoal)] leading-tight">{step.title}</h3>
                  </div>
                </div>
                <p className="text-[var(--charcoal)]/70 text-sm leading-relaxed flex-1">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[var(--earth)] text-white p-8 text-center max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4">Нашият ангажимент</h3>
            <p className="text-white/90 leading-relaxed">
              От първата среща до последния детайл сме до вас, за да гарантираме професионализъм, коректност и грижа към
              вашия проект. Винаги можете да разчитате на нас за въпроси и съдействие в рамките на работното ни време.
            </p>
          </motion.div>
        </div>
      </section>

      <PartnersMarquee />
      <TeamSection />
      {/* Contact Form Section */}
      <ContactFormSection />

      <Footer />
    </div>
  )
}
