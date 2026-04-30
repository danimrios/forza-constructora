import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Zap, Dumbbell, Coffee, Shield, Clock, Star, Lightbulb, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ContactCTA } from "@/components/home/ContactCTA"
import { getServiceBySlug } from "@/lib/services"
import { WA_ENTREVISTA_COMPLEJO } from "@/lib/whatsapp"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Complejos Deportivos de Pádel Llave en Mano',
  description: 'Construimos complejos de pádel y deportivos llave en mano en Buenos Aires. Desde movimiento de suelos hasta terminaciones premium. Gestión integral.',
  keywords: [
    'complejo de padel llave en mano',
    'construcción cancha de padel',
    'complejo deportivo Buenos Aires',
    'padel inversor',
  ],
  alternates: {
    canonical: 'https://forzaconstructora.com.ar/servicios/complejos-deportivos',
  },
}

const MODALITIES = [
  {
    icon: Zap,
    title: "Pádel",
    description: "Canchas profesionales homologadas con iluminación LED de alta eficiencia y cerramiento perimetral de alta resistencia.",
  },
  {
    icon: Dumbbell,
    title: "Gimnasio",
    description: "Espacios funcionales con pisos técnicos antiimpacto, ventilación dimensionada y accesos independientes.",
  },
  {
    icon: Coffee,
    title: "Área de Descanso",
    description: "Vestuarios, sanitarios y zonas de esparcimiento integrados al diseño general del complejo.",
  },
]

const PROPUESTA_VALOR = {
  heading: "Gestión Integral de Infraestructura Deportiva",
  p1: "En Forza Constructora SRL, entendemos que un complejo deportivo no es solo una superficie de juego, es una unidad de negocio que debe ser rentable, duradera y segura. Nos especializamos en la ejecución de proyectos desde cero, eliminando la fragmentación de proveedores que suele dilatar los tiempos y encarecer los costos.",
  p2: "Al elegir nuestra modalidad Llave en Mano, delegás en manos expertas la responsabilidad técnica y operativa, asegurando un estándar de calidad uniforme en cada etapa del proceso.",
}

const METODOLOGIA_HEADING = "De la visión a la realidad: Etapas de obra."

const ETAPAS = [
  {
    number: "01",
    title: "Ingeniería de Suelos y Movimiento de Tierras",
    text: "Analizamos y preparamos el terreno para garantizar la estabilidad estructural. Realizamos nivelaciones láser de precisión para evitar drenajes deficientes y hundimientos futuros.",
  },
  {
    number: "02",
    title: "Estructura y Hormigón de Alta Resistencia",
    text: "Diseñamos bases sólidas capaces de soportar el uso intensivo y el impacto constante, utilizando hormigón con aditivos específicos que garantizan una vida útil extendida.",
  },
  {
    number: "03",
    title: "Acabados de Competición",
    text: "Aplicamos técnicas de pulido, sellado y remediación de juntas para lograr una superficie perfectamente plana, reduciendo el riesgo de lesiones y mejorando la calidad del juego.",
  },
  {
    number: "04",
    title: "Terminaciones y Equipamiento",
    text: "Desde la demarcación reglamentaria hasta la preparación para la instalación de cerramientos y luminarias. Entregamos el complejo listo para operar.",
  },
]

const BENEFICIOS_HEADING = "¿Por qué elegir Forza para tu próximo complejo?"

const BENEFICIOS = [
  {
    Icon: Shield,
    title: "Unificación de Responsabilidad",
    text: "Un solo interlocutor para todas las etapas de la obra. Menos intermediarios, más control.",
  },
  {
    Icon: Clock,
    title: "Optimización de Tiempos",
    text: "Nuestra capacidad de respuesta nos permite cumplir con cronogramas estrictos, acelerando el retorno de tu inversión.",
  },
  {
    Icon: Star,
    title: "Calidad de Exportación",
    text: "Utilizamos insumos de primer nivel y maquinaria de última generación para lograr superficies que superan los estándares del mercado local.",
  },
  {
    Icon: Lightbulb,
    title: "Asesoramiento Técnico",
    text: "No solo construimos, te asesoramos en la elección de los mejores materiales y diseños según el deporte y la ubicación del proyecto.",
  },
]

const CTA_FINAL = {
  quote: "¿Tenés un proyecto en mente? Hagámoslo realidad.",
  body: "No inviertas en una obra, invertí en un activo que dure décadas. Poné tu complejo en manos de quienes saben de hormigón.",
  cta: "SOLICITAR ENTREVISTA TÉCNICA",
}

export default function ComplejosDeportivosPage() {
  const service = getServiceBySlug("complejos-deportivos")!

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-brand-dark min-h-[50vh] flex items-end pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <Image src="/images/portadas/portada-complejos-deportivos.png" alt="" fill className="object-cover object-center" priority />
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
              {PROPUESTA_VALOR.heading}
            </h2>
            <p className="text-muted leading-relaxed text-lg mt-6">{PROPUESTA_VALOR.p1}</p>
            <p className="text-muted leading-relaxed text-lg mt-6">{PROPUESTA_VALOR.p2}</p>
          </div>
        </section>

        {/* Módulo 2 — Metodología */}
        <section className="bg-brand-dark py-12 md:py-24">
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-primary mb-8 md:mb-16 text-center px-6">
            {METODOLOGIA_HEADING}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6">
            {ETAPAS.map((etapa) => (
              <article key={etapa.number} className="bg-brand-surface p-5 md:p-8 border-t-2 border-brand-gold">
                <span className="text-brand-gold font-black text-5xl font-heading opacity-30">
                  {etapa.number}
                </span>
                <h3 className="text-primary font-bold text-xl mt-4">{etapa.title}</h3>
                <p className="text-muted text-sm leading-relaxed mt-3">{etapa.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Módulo 3 — Beneficios para el Inversor */}
        <section className="bg-brand-surface py-12 md:py-24 px-4 md:px-6">
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-primary mb-8 md:mb-16 text-center max-w-3xl mx-auto">
            {BENEFICIOS_HEADING}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {BENEFICIOS.map((item) => (
              <div key={item.title} className="text-center p-6">
                <item.Icon className="text-brand-gold w-10 h-10 mx-auto mb-4" />
                <h3 className="text-primary font-bold text-lg">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Módulo 4 — CTA Final */}
        <section className="relative bg-brand-dark py-12 md:py-24 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-blueprint" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <blockquote className="border-l-4 border-brand-gold pl-6 text-left mb-12">
              <p className="font-heading font-black text-3xl text-primary">{CTA_FINAL.quote}</p>
            </blockquote>
            <p className="text-muted text-lg leading-relaxed mt-6">{CTA_FINAL.body}</p>
            <a
              href={WA_ENTREVISTA_COMPLEJO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-gold text-brand-dark font-bold tracking-widest px-6 py-4 md:px-12 md:py-5 mt-10 hover:brightness-110 transition-all"
            >
              {CTA_FINAL.cta}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Modalities */}
        <section className="bg-brand-dark py-12 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading font-black text-3xl text-primary mb-12 text-center">
              Modalidades
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {MODALITIES.map((m) => (
                <article
                  key={m.title}
                  className="bg-brand-surface border border-white/5 p-5 md:p-8"
                >
                  <m.icon className="w-8 h-8 text-brand-gold mb-4" />
                  <h3 className="font-heading font-bold text-primary text-xl mb-3">{m.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{m.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
