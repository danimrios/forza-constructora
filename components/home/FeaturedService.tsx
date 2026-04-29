import Link from "next/link"
import Image from "next/image"
import { Trophy, Building2, CheckCircle2, ArrowRight } from "lucide-react"
import { SERVICES } from "@/lib/services"

const SLUG_IMAGES: Record<string, { desktop: string; mobile: string }> = {
  "complejos-deportivos": {
    desktop: "/images/Padel-card-destacadas.png",
    mobile: "/images/Padel-card-destacadas-mivil.png",
  },
  "edificios": {
    desktop: "/images/Edificios-card-destacadas.png",
    mobile: "/images/Edificios-card-destacadas-mivil.png",
  },
}

const SLUG_LABELS: Record<string, string> = {
  "complejos-deportivos": "Quiero mi complejo",
  "edificios": "Quiero mi edificio",
}

interface FeaturedServiceProps {
  slug: string
  imageLeft?: boolean
}

export function FeaturedService({ slug, imageLeft = true }: FeaturedServiceProps) {
  const service = SERVICES.find((s) => s.slug === slug)!
  const ctaLabel = SLUG_LABELS[slug] ?? "Ver más"
  const images = SLUG_IMAGES[slug]

  return (
    <section className="bg-brand-dark relative group">
      {/* Stretched link — makes the whole section clickable */}
      <Link href={service.href} className="absolute inset-0 z-0" aria-label={service.title} />

      <div className={`grid grid-cols-1 lg:grid-cols-2 ${!imageLeft ? "lg:[&>*:first-child]:order-last" : ""}`}>
        {/* Image */}
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[600px] overflow-hidden">
          {images ? (
            <>
              {/* Mobile */}
              <Image
                src={images.mobile}
                alt={service.title}
                fill
                className="object-cover object-center lg:hidden"
              />
              {/* Desktop */}
              <Image
                src={images.desktop}
                alt={service.title}
                fill
                className="object-cover object-center hidden lg:block"
              />
            </>
          ) : (
            <div className="w-full h-full bg-brand-surface" />
          )}
        </div>

        {/* Content */}
        <div className="bg-brand-dark px-8 py-16 lg:px-16 flex flex-col justify-center">
          <span className="inline-block bg-brand-gold/10 text-brand-gold text-xs tracking-widest uppercase px-3 py-1 mb-6 self-start">
            {service.category}
          </span>

          <h2 className="font-heading font-black text-4xl lg:text-5xl text-primary leading-tight">
            {service.title}
          </h2>
          <p className="text-brand-gold text-xl mt-2">{service.tagline}</p>

          <p className="text-muted mt-6 leading-relaxed">{service.description}</p>

          <ul className="mt-8 flex flex-col gap-3">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span className="text-primary">{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            href={service.href}
            className="relative z-10 mt-10 inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-bold px-8 py-4 hover:brightness-110 transition-all self-start"
          >
            {ctaLabel}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
