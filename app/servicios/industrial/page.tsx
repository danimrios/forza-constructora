import Link from "next/link"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ContactCTA } from "@/components/home/ContactCTA"
import { getServiceBySlug } from "@/lib/services"

export const metadata = {
  title: "Industrial — Forza Constructora SRL",
  description:
    "Naves, galpones y depósitos industriales. Recuperación de pavimentos, tratamiento de estructuras y mantenimiento integral de plantas.",
}

export default function IndustrialPage() {
  const service = getServiceBySlug("industrial")!

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-brand-dark min-h-[50vh] flex items-end pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <Image src="/images/portadas/portada-industrial.png" alt="" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-brand-dark/60" />
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-muted text-sm">
                <li><Link href="/" className="hover:text-brand-gold transition-colors">Inicio</Link></li>
                <li className="text-white/20">→</li>
                <li><span>Servicios</span></li>
                <li className="text-white/20">→</li>
                <li className="text-primary">{service.title}</li>
              </ol>
            </nav>
            <span className="inline-block bg-brand-gold/10 text-brand-gold text-xs tracking-widest uppercase px-3 py-1 mb-4">
              {service.category}
            </span>
            <h1 className="font-heading font-black text-5xl text-primary leading-tight">
              {service.title}
            </h1>
            <p className="text-brand-gold text-xl mt-2">{service.tagline}</p>
          </div>
        </section>

        {/* Description */}
        <section className="bg-brand-surface py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-muted leading-relaxed text-lg">{service.description}</p>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
                    <span className="text-primary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
