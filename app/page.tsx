import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import PartnersMarquee from "./components/PartnersMarquee"
import Gallery from "./components/Gallery"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import PriceCards from "./components/PriceCards"

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--cream)]">
      <Navbar />
      <Hero />
      <About />
      <PartnersMarquee />
      <Gallery />
      <Testimonials />
      <PriceCards />
      <FAQ />
      <Footer />
    </main>
  )
}
