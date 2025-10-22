"use client"

export default function PartnersMarquee() {
  const partners = [
    { name: "Logo1", logo: "/partners/logo-1.png" },
    { name: "Logo2", logo: "/partners/logo-2.png" },
    { name: "Logo3", logo: "/partners/logo-3.png" },
    { name: "Logo4", logo: "/partners/logo-4.jpg" },
    { name: "Logo5", logo: "/partners/logo-5.png" },
    { name: "Logo6", logo: "/partners/logo-6.png" },
    { name: "Logo7", logo: "/partners/logo-7.png" },
    { name: "Logo8", logo: "/partners/logo-8.png" },
    { name: "Logo9", logo: "/partners/logo-9.png" },
    { name: "Logo10", logo: "/partners/logo-10.png" },
    { name: "djess", logo: "/partners/djess.jpg" },
    { name: "veg", logo: "/partners/veg.jpg" },
    { name: "Blum", logo: "/partners/blum-logo.png" },
    { name: "hetich", logo: "/partners/hetich.webp" },

  ]

  // Duplicate the array for seamless loop
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="py-16 bg-[var(--earth)] overflow-hidden border-y border-white/10">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--earth)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--earth)] to-transparent z-10" />

        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="h-16 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
