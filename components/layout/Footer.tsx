import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, MessageCircle } from "lucide-react"
import { SERVICES } from "@/lib/services"
import { WA_GENERAL } from "@/lib/whatsapp"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

const WHATSAPP_URL = WA_GENERAL
const INSTAGRAM_URL = "https://www.instagram.com/forzaconstructora/"
const MAPS_URL = "https://maps.google.com/?q=Constructora+Forza,+Río+de+Janeiro+2210,+B1640+Martínez,+Provincia+de+Buenos+Aires"

export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1: Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/logos/Logo-forzaz.png"
                alt="Forza Constructora SRL"
                width={300}
                height={100}
                className="h-24 w-auto object-contain"
              />
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Construimos lo que otros no pueden.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-brand-gold transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-brand-gold transition-colors duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="font-heading font-bold text-primary mb-6 tracking-wide uppercase text-sm">
              Servicios
            </h3>
            <ul className="flex flex-col gap-3">
              {SERVICES.filter((s) => s.showInGrid || s.slug === "complejos-deportivos" || s.slug === "edificios").map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="text-muted hover:text-brand-gold transition-colors duration-200 text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="font-heading font-bold text-primary mb-6 tracking-wide uppercase text-sm">
              Contacto
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted hover:text-brand-gold transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span>+54 9 11 5580-9992</span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted hover:text-brand-gold transition-colors text-sm"
                >
                  <InstagramIcon className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span>@forzaconstructora</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Maps embed */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0" />
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-brand-gold transition-colors text-sm"
            >
              Río de Janeiro 2210, B1640 Martínez, Provincia de Buenos Aires
            </a>
          </div>
          <div className="relative group">
            <iframe
              src="https://maps.google.com/maps?q=Río+de+Janeiro+2210,+Martínez,+Buenos+Aires,+Argentina&output=embed"
              width="100%"
              height="220"
              className="border-0 grayscale opacity-80 pointer-events-none"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-200"
              aria-label="Abrir en Google Maps"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-brand-dark/90 text-brand-gold text-sm font-semibold px-4 py-2 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Abrir en Google Maps
              </span>
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-muted text-sm">
            © 2026 Forza Constructora SRL. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
