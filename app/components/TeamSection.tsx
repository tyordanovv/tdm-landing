import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Ива Николова",
    role: "интериорен дизайнер",
    image: "/team/iva.JPG",
    description: "За мен интериорният дизайн е повече от професия – той е път към синергия между естетика и функционалност. Пространството трябва да носи хармония, да вдъхновява и в същото време да бъде отражение на човека, който го обитава."
  },
  {
    name: "Дилян Димитров",
    role: "интериорен дизайнер",
    image: "/team/dilyan.jpg",
    description: "Интериорният дизайн за мен е изкуство на подредената простота – съчетание между чиста линия, функционалност и атмосфера, която носи спокойствие и завършеност. Пространството трябва да работи за човека, който го обитава, като в същото време му дава свобода да се чувства себе си."
  }
];

export default function TeamSection() {
  return (
    <section className="py-24 px-4 bg-[#e8e4df] overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center">
          {/* Team grid */}
          <div className="relative w-full">
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
                whitespace-normal break-words"              
                >
              eкипът
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl mx-auto mb-16">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative flex flex-col items-center"
                >
                  <div className="relative rounded-3xl overflow-hidden group cursor-pointer w-full h-[650px] mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale transition-all duration-500"
                    />
                    
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-500 flex items-end p-6">
                      <div className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <p className="text-base leading-relaxed italic">
                          "{member.description}"
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center text-[#3d3d3d]">
                    <h3 className="font-bold text-2xl mb-1">{member.name}</h3>
                    <p className="text-sm opacity-70">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Team description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-3xl mx-auto text-center space-y-6 text-[#3d3d3d]/80"
            >
              <p className="text-lg">
                Интериорно студио ТДМ Бургас се състои от интериорни дизайнери с обща визия и допълващи се стилове, които съчетават знания с практически опит и страст към създаването на пространства с характер.
              </p>
              <p className="text-lg">
                Заедно създаваме интериори, които са едновременно естетични и функционални – места, в които си струва да се насладиш на всяка една секунда.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
