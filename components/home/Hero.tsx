import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-brand-dark overflow-hidden">
      {/* Background image — mobile */}
      <Image
        src="/images/fondo-main-movil.png"
        alt=""
        fill
        className="object-cover object-center md:hidden"
        priority
      />

      {/* Background image — desktop */}
      <Image
        src="/images/fondo-main.png"
        alt=""
        fill
        className="object-cover object-center hidden md:block"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-dark/65" />

      {/* Blueprint pattern */}
      <div className="absolute inset-0 bg-blueprint" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-brand-gold/50" />
          <span className="text-brand-gold tracking-[0.3em] text-sm font-semibold uppercase font-heading">
            FORZA CONSTRUCTORA SRL
          </span>
          <div className="h-px w-12 bg-brand-gold/50" />
        </div>

        {/* Headline */}
        <h1 className="font-heading font-black text-5xl md:text-7xl text-primary leading-tight">
          Construimos lo que
          <br />
          otros no pueden
        </h1>

        {/* Subtitle */}
        <p className="text-muted text-xl mt-6 max-w-xl">
          De la estructura al detalle premium. Llave en mano.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link
            href="/#servicios"
            className="bg-brand-gold text-brand-dark px-8 py-4 font-bold hover:brightness-110 transition-all"
          >
            Ver servicios
          </Link>
          <Link
            href="/#contacto"
            className="border border-white/30 text-primary px-8 py-4 hover:bg-white/10 transition-all"
          >
            Contactar
          </Link>
        </div>
      </div>

      {/* ChevronDown bounce */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft">
        <ChevronDown className="w-8 h-8 text-brand-gold/60" />
      </div>

      {/* Vertical text — bottom right */}
      <span
        className="absolute bottom-16 right-6 text-xs tracking-widest text-primary/30 hidden lg:block"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        BUENOS AIRES · ARGENTINA
      </span>
    </section>
  )
}
