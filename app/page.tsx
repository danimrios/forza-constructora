import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/home/Hero"
import { FeaturedService } from "@/components/home/FeaturedService"
import { ServicesGrid } from "@/components/home/ServicesGrid"
import { Stats } from "@/components/home/Stats"
import { ContactCTA } from "@/components/home/ContactCTA"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="h-4 bg-brand-surface-hover border-y border-brand-gold/60" />
        <section id="servicios" className="bg-brand-dark pt-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SectionTitle title="Nuestros Servicios" />
          </div>
        </section>
        <FeaturedService slug="complejos-deportivos" />
        <div className="h-4 bg-brand-surface-hover border-y border-brand-gold/60" />
        <FeaturedService slug="edificios" imageLeft={false} />
        <ServicesGrid />
        <Stats />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
