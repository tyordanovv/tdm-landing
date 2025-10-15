"use client"

export default function PartnersMarquee() {
  const partners = [
    { name: "Architectural Digest", logo: "/architectural-digest-logo.png" },
    { name: "Elle Decor", logo: "/elle-decor-logo.jpg" },
    { name: "Interior Design Award", logo: "/interior-design-award-gold-medal.jpg" },
    { name: "Best of Houzz", logo: "/houzz-best-of-award.jpg" },
    { name: "Design Excellence", logo: "/design-excellence-award-trophy.jpg" },
    { name: "Modern Living", logo: "/modern-living-magazine-logo.jpg" },
    { name: "TDM", logo: "/partners/tdm-furniture.jpg" },
    { name: "djess", logo: "/partners/djess.jpg" },
    { name: "veg", logo: "/partners/veg.jpg" },
    { name: "Blum", logo: "/partners/blum-logo.png" },
    { name: "hetich", logo: "/partners/hetich.webp" }
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
