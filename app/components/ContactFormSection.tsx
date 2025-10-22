"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Phone } from "lucide-react"

export default function ContactFormSection() {
  return (
    <section
      className="section-padding relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apartment-plan-6257405_1280-4ivrggrjAQ4yaoPU33xfVX8EI20RjN.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 relative h-[400px] lg:h-auto"
          >
            <Image
              src="/design/design-1.jpg"
              alt="Interior Design"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-3"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--charcoal)] tracking-wide">
                ЗАПИТВАНЕ ЗА ОФЕРТА
              </h2>
              <p className="text-content mb-8 leading-relaxed">
                Попълнете формата за запитване, като посочите Вашите данни за контакт и изберете от падащите менюта
                спецификациите на Вашето пространство, както и пакетното предложение, на което сте се спрели.
              </p>

              <form
                className="space-y-5"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const data = Object.fromEntries(formData.entries());

                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                  });

                  if (res.ok) {
                    alert("Запитването беше изпратено успешно!");
                  } else {
                    alert("Възникна грешка при изпращане. Опитайте отново.");
                  }
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Име"
                      className="w-full rounded-md border border-gray-300 shadow-sm focus:border-[var(--earth)] focus:ring-1 focus:ring-[var(--earth)] px-4 py-3 bg-white"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Фамилия"
                      className="w-full rounded-md border border-gray-300 shadow-sm focus:border-[var(--earth)] focus:ring-1 focus:ring-[var(--earth)] px-4 py-3 bg-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Телефон за контакт"
                      className="w-full rounded-md border border-gray-300 shadow-sm focus:border-[var(--earth)] focus:ring-1 focus:ring-[var(--earth)] px-4 py-3 bg-white"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">пример: +359 894663323</p>
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full rounded-md border border-gray-300 shadow-sm focus:border-[var(--earth)] focus:ring-1 focus:ring-[var(--earth)] px-4 py-3 bg-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--earth)] mb-2 uppercase tracking-wide">
                    Изберете пакетна услуга ?*
                  </label>
                  <select
                    name="packageType"
                    className="w-full rounded-md border border-gray-300 shadow-sm focus:border-[var(--earth)] focus:ring-1 focus:ring-[var(--earth)] px-4 py-3 bg-white"
                    required
                  >
                    <option value="basic">Basic - 22€/m²</option>
                    <option value="standard">Standard - 32€/m²</option>
                    <option value="premium">Premium - 45€/m²</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--earth)] mb-2 uppercase tracking-wide">
                    Посочете тип на имота ?*
                  </label>
                  <select
                    name="propertyType"
                    className="w-full rounded-md border border-gray-300 shadow-sm focus:border-[var(--earth)] focus:ring-1 focus:ring-[var(--earth)] px-4 py-3 bg-white"
                    required
                  >
                    <option value="apartment">Апартамент</option>
                    <option value="house">Къща</option>
                    <option value="office">Офис</option>
                    <option value="commercial">Търговски обект</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--earth)] mb-2 uppercase tracking-wide">
                    Посочете вид строителство ?*
                  </label>
                  <select
                    name="constructionType"
                    className="w-full rounded-md border border-gray-300 shadow-sm focus:border-[var(--earth)] focus:ring-1 focus:ring-[var(--earth)] px-4 py-3 bg-white"
                    required
                  >
                    <option value="new">Ново строителство</option>
                    <option value="renovation">Ремонт</option>
                    <option value="reconstruction">Реконструкция</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--earth)] mb-2 uppercase tracking-wide">
                    Допълнителна информация*
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Посочете населеното място и общата квадратура на обекта"
                    className="w-full rounded-md border border-gray-300 shadow-sm focus:border-[var(--earth)] focus:ring-1 focus:ring-[var(--earth)] px-4 py-3 bg-white resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--earth)] text-white py-3 px-6 rounded-md hover:bg-[var(--charcoal)] transition-colors duration-300 font-medium tracking-wide"
                >
                  Изпрати запитване
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--charcoal)] tracking-wide">
                СВЪРЖЕТЕ СЕ С НАС
              </h2>
              <p className="text-content mb-8 leading-relaxed">
                Обадете ни се или изпратете Вашето запитване за интериорно или мебелно проектиране, за ние ще е свързем
                с Вас за да уточним детайлите и да Ви изготвим оферта.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-8 h-8 text-[var(--earth)] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg font-medium text-[var(--charcoal)] mb-1">Телефон</p>
                    <a
                      href="tel:+359894339386"
                      className="text-xl font-semibold text-[var(--charcoal)] hover:text-[var(--earth)] transition"
                    >
                      + (359) 0894 339 386
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-8 h-8 text-[var(--earth)] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg font-medium text-[var(--charcoal)] mb-1">Телефон</p>
                    <a
                      href="tel:+359898533158"
                      className="text-xl font-semibold text-[var(--charcoal)] hover:text-[var(--earth)] transition"
                    >
                      + (359) 0898 533 158
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
