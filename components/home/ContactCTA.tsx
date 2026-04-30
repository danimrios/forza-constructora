import { MessageCircle } from "lucide-react"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

import { WA_PRESUPUESTO } from "@/lib/whatsapp"

const INSTAGRAM_URL = "https://www.instagram.com/forzaconstructora/"

export function ContactCTA() {
  return (
    <section id="contacto" className="relative bg-brand-surface py-12 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Blueprint pattern */}
      <div className="absolute inset-0 bg-blueprint" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-primary">
          ¿Tenés un proyecto en mente?
        </h2>
        <p className="text-muted mt-4">
          Contanos tu idea. Nos encargamos de todo, desde el primer plano hasta la llave en tu mano.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WA_PRESUPUESTO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand-gold text-brand-dark font-bold px-8 py-4 hover:brightness-110 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Escribinos por WhatsApp
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 border border-brand-gold/40 text-brand-gold px-8 py-4 hover:bg-brand-gold/10 transition-all"
          >
            <InstagramIcon className="w-5 h-5" />
            Seguinos en Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
