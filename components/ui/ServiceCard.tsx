import Link from "next/link"
import Image from "next/image"
import { Building2, Factory, Flame, House, Wrench } from "lucide-react"
import type { Service } from "@/lib/services"

const SLUG_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  viviendas: House,
  mantenimiento: Wrench,
  industrial: Factory,
  "redes-incendio": Flame,
}

const SLUG_IMAGES: Record<string, { desktop: string; mobile: string }> = {
  mantenimiento: {
    desktop: "/images/cards/mantenimientos-industriales-cards.png",
    mobile: "/images/cards/mantenimientos-industriales-cards.png",
  },
  viviendas: {
    desktop: "/images/cards/casas-estructutra-metalica-cards.png",
    mobile: "/images/cards/casas-estructutra-metalica-cards-movil.png",
  },
  industrial: {
    desktop: "/images/cards/naves-industriales-cards.png",
    mobile: "/images/cards/naves-industriales-cards-movil.png",
  },
  "redes-incendio": {
    desktop: "/images/cards/redes-incendio-cards.png",
    mobile: "/images/cards/redes-incendio-cards-movil.png",
  },
}

interface ServiceCardProps {
  service: Service
  tall?: boolean
}

export function ServiceCard({ service, tall = false }: ServiceCardProps) {
  const Icon = SLUG_ICONS[service.slug] ?? Building2
  const images = SLUG_IMAGES[service.slug]

  return (
    <Link
      href={service.href}
      className={`
        group relative flex flex-col bg-brand-surface cursor-pointer
        border-t-2 border-transparent hover:border-brand-gold
        transition-all duration-300 hover:-translate-y-1
        overflow-hidden
        ${tall ? "min-h-[400px]" : "min-h-[300px]"}
      `}
    >
      {/* Image area */}
      <div className="relative flex-shrink-0 aspect-video overflow-hidden">
        {images ? (
          <>
            <Image
              src={images.mobile}
              alt={service.title}
              fill
              className="object-cover object-center md:hidden"
            />
            <Image
              src={images.desktop}
              alt={service.title}
              fill
              className="object-cover object-center hidden md:block"
            />
          </>
        ) : (
          <div className="w-full h-full bg-brand-dark/50 flex items-center justify-center">
            <Icon className="w-16 h-16 text-brand-gold/20" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <span className="text-brand-gold text-xs tracking-widest uppercase font-semibold">
          {service.category}
        </span>
        <h3 className="font-heading font-bold text-2xl text-primary mt-2">{service.title}</h3>
        <p className="text-muted text-sm mt-3 line-clamp-3 flex-1">{service.description}</p>
        <span className="mt-4 text-brand-gold font-semibold group-hover:underline self-start">
          Ver más →
        </span>
      </div>
    </Link>
  )
}
