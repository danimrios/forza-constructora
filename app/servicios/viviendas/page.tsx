import Link from "next/link"
import Image from "next/image"
import { Thermometer, Shield, Leaf, PenTool, Recycle, Zap, Pencil, Gem, KeyRound, TreePine, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ContactCTA } from "@/components/home/ContactCTA"
import { getServiceBySlug } from "@/lib/services"
import { WA_VIVIENDAS } from "@/lib/whatsapp"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Viviendas Steel Frame | Casas de Alta Gama en Acero',
  description: 'Viviendas premium en steel frame con acero galvanizado. Construcción en seco, 50% más rápido, aislamiento superior y diseño personalizado en Argentina.',
  keywords: [
    'viviendas steel frame Argentina',
    'casas acero galvanizado',
    'construcción en seco viviendas',
    'steel frame Buenos Aires',
    'Forza Alpina',
  ],
  alternates: {
    canonical: 'https://forzaconstructora.com.ar/servicios/viviendas',
  },
}

// ── Módulo 1: Propuesta de Valor ────────────────────────────────
const VALOR_HEADING = "Viviendas de Alta Gama: Innovación Estructural y Confort Absoluto."
const VALOR_P1_BEFORE = "En Forza Constructora SRL, redefinimos el concepto de hogar a través de la construcción en seco de alta prestación. Nuestras viviendas con estructura de acero galvanizado ("
const VALOR_STEEL_FRAME = "Steel Frame"
const VALOR_P1_AFTER = ") representan el estándar más alto en arquitectura moderna: una combinación perfecta entre libertad de diseño, resistencia extrema y una eficiencia energética inalcanzable para la construcción tradicional."
const VALOR_P2 = "Construimos hogares pensados para durar generaciones, utilizando procesos industrializados que eliminan la incertidumbre de la obra húmeda, garantizando precisión en los costos y tiempos de entrega exactos."

// ── Módulo 2: Atributos Técnicos ────────────────────────────────
const ATRIBUTOS_HEADING = "Tecnología que transforma la calidad de vida."
const ATRIBUTOS = [
  {
    Icon: Thermometer,
    title: "Aislamiento Térmico y Acústico Superior",
    text: "Gracias a la composición multicapa de nuestros muros, logramos viviendas que mantienen la temperatura ideal con un ahorro energético de hasta el 60% en climatización. Un hogar silencioso y eficiente.",
    badge: "Ahorro hasta 60%",
  },
  {
    Icon: Shield,
    title: "Resistencia y Durabilidad Extrema",
    text: "El acero galvanizado es inmune a plagas, no se deforma con el tiempo y ofrece una resistencia sísmica y estructural superior, garantizando una vivienda sólida y libre de humedad de cimientos.",
    badge: null,
  },
  {
    Icon: Leaf,
    title: "Construcción en Seco y Obra Limpia",
    text: "Reducimos los tiempos de ejecución en un 50%. Tu casa premium se construye en meses, no en años, bajo un entorno de obra ordenado, sustentable y con desperdicio cero.",
    badge: "50% más rápido",
  },
  {
    Icon: PenTool,
    title: "Versatilidad de Diseño",
    text: "La ligereza del acero permite voladizos audaces, grandes ventanales y plantas libres, adaptándose a cualquier estilo arquitectónico, desde lo minimalista hasta lo clásico.",
    badge: null,
  },
] as const

// ── Módulo 3: Comparativa ───────────────────────────────────────
const COMPARATIVA_HEADING = "La diferencia que se mide en meses."
const BARRA_TRADICIONAL_LABEL = "Construcción Tradicional"
const BARRA_TRADICIONAL_TIEMPO = "18 — 24 meses"
const BARRA_TRADICIONAL_SUB = "Obra húmeda, imprevistos, demoras"
const BARRA_FORZA_LABEL = "Forza Steel Frame"
const BARRA_FORZA_TIEMPO = "6 — 8 meses"
const BARRA_FORZA_SUB = "Construcción en seco, tiempos exactos"
const ECO_ITEMS = [
  { Icon: Leaf, label: "Baja huella de carbono" },
  { Icon: Recycle, label: "Materiales reciclables" },
  { Icon: Zap, label: "Eficiencia energética" },
] as const

// ── Módulo 4: Alcance del Servicio ──────────────────────────────
const ALCANCE_HEADING = "Un proceso a medida, de principio a fin."
const ALCANCE = [
  {
    Icon: Pencil,
    title: "Proyectos Personalizados",
    text: "Trabajamos sobre planos a medida, asegurando que cada detalle refleje el estilo de vida del cliente.",
  },
  {
    Icon: Gem,
    title: "Terminaciones de Lujo",
    text: "Fachadas en Siding, EIFS, piedra o madera, junto con interiores de yeso de terminación perfecta.",
  },
  {
    Icon: KeyRound,
    title: "Llave en Mano Real",
    text: "Nos ocupamos de todo, desde la platea de fundación hasta los últimos detalles de grifería y revestimientos.",
  },
  {
    Icon: TreePine,
    title: "Sustentabilidad Activa",
    text: "Construcción con baja huella de carbono, optimizando recursos y respetando el entorno del terreno.",
  },
] as const

// ── Módulo 5: CTA Final ─────────────────────────────────────────
const CTA_HEADING = "Tu inversión, protegida por la ingeniería."
const CTA_BODY = "Sabemos que construir tu casa es la inversión más importante de tu vida. Por eso, en Forza Constructora SRL, aplicamos el rigor de la ingeniería industrial a la arquitectura residencial. No solo levantamos paredes; creamos el refugio tecnológico y sofisticado que tu familia merece."
const CTA_BOTON = "INICIAR EL PROYECTO DE MI CASA"

export default function ViviendasPage() {
  const service = getServiceBySlug("viviendas")!

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-brand-dark min-h-[50vh] flex items-end pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <Image
            src="/images/portadas/portada-casas-acero.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
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
            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary leading-tight">
              {service.title}
            </h1>
            <p className="text-brand-gold text-base sm:text-xl mt-2">{service.tagline}</p>
          </div>
        </section>

        {/* Módulo 1 — Propuesta de Valor */}
        <section className="bg-brand-surface py-12 md:py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-primary">
              {VALOR_HEADING}
            </h2>
            <p className="text-muted leading-relaxed text-lg mt-6">
              {VALOR_P1_BEFORE}
              <span className="text-brand-gold font-semibold">{VALOR_STEEL_FRAME}</span>
              {VALOR_P1_AFTER}
            </p>
            <p className="text-muted leading-relaxed text-lg mt-6">{VALOR_P2}</p>
          </div>
        </section>

        {/* Módulo 2 — Atributos Técnicos */}
        <section className="bg-brand-dark py-12 md:py-24">
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-primary mb-8 md:mb-16 text-center px-6">
            {ATRIBUTOS_HEADING}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6">
            {ATRIBUTOS.map((item) => (
              <article key={item.title} className="bg-brand-surface p-5 md:p-8 border-t-2 border-brand-gold">
                <item.Icon className="text-brand-gold w-8 h-8 mb-4" />
                <h3 className="text-primary font-bold text-xl">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed mt-3">{item.text}</p>
                {item.badge && (
                  <span className="inline-block bg-brand-gold/10 text-brand-gold text-xs px-3 py-1 mt-4">
                    {item.badge}
                  </span>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Módulo 3 — Comparativa de Tiempo */}
        <section className="bg-brand-surface py-12 md:py-24 px-4 md:px-6">
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-primary mb-8 md:mb-16 text-center max-w-3xl mx-auto">
            {COMPARATIVA_HEADING}
          </h2>
          <div className="max-w-2xl mx-auto flex flex-col gap-8">
            {/* Barra tradicional */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-muted font-medium">{BARRA_TRADICIONAL_LABEL}</span>
                <span className="text-muted">{BARRA_TRADICIONAL_TIEMPO}</span>
              </div>
              <div className="bg-brand-dark h-4">
                <div className="bg-white/20 h-full w-full" />
              </div>
              <p className="text-muted text-xs mt-1">{BARRA_TRADICIONAL_SUB}</p>
            </div>
            {/* Barra Forza */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-brand-gold font-semibold">{BARRA_FORZA_LABEL}</span>
                <span className="text-brand-gold font-semibold">{BARRA_FORZA_TIEMPO}</span>
              </div>
              <div className="bg-brand-dark h-4">
                <div className="bg-brand-gold h-full w-[35%]" />
              </div>
              <p className="text-muted text-xs mt-1">{BARRA_FORZA_SUB}</p>
            </div>
          </div>

          {/* Íconos eco */}
          <div className="flex flex-col sm:flex-row justify-center gap-10 mt-12">
            {ECO_ITEMS.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                <item.Icon className="text-brand-gold w-8 h-8" />
                <span className="text-muted text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Módulo 4 — Alcance del Servicio */}
        <section className="bg-brand-dark py-12 md:py-24 px-4 md:px-6">
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-primary mb-8 md:mb-16 text-center max-w-3xl mx-auto">
            {ALCANCE_HEADING}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {ALCANCE.map((item) => (
              <div key={item.title} className="bg-brand-surface p-5 md:p-8 flex flex-col sm:flex-row gap-5 items-start">
                <item.Icon className="text-brand-gold w-8 h-8 shrink-0" />
                <div>
                  <h3 className="text-primary font-bold text-lg">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mt-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Módulo 5 — CTA Final */}
        <section className="relative bg-brand-surface py-12 md:py-24 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-blueprint" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-primary mb-8">
              {CTA_HEADING}
            </h2>
            <p className="text-muted text-lg leading-relaxed">{CTA_BODY}</p>
            <a
              href={WA_VIVIENDAS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-gold text-brand-dark font-bold tracking-widest px-6 py-4 md:px-12 md:py-5 mt-10 hover:brightness-110 transition-all"
            >
              {CTA_BOTON}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
