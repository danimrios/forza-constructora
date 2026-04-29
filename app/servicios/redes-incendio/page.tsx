import Link from "next/link"
import Image from "next/image"
import { ShieldCheck, Wrench, CalendarCheck, FileCheck2, Flame, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ContactCTA } from "@/components/home/ContactCTA"
import { getServiceBySlug } from "@/lib/services"

export const metadata = {
  title: "Redes de Incendio — Forza Constructora SRL",
  description:
    "Diseño e instalación de sistemas contra incendio de alta gama. Rociadores, hidrantes y cumplimiento normativo completo.",
}

// ── Módulo 1: Propuesta de Valor ────────────────────────────────
const VALOR_TITULO =
  "Sistemas de Prevención y Control de Incendios: Blindando tu patrimonio."
const VALOR_P1 =
  "Una red de incendio es mucho más que un requisito reglamentario o una exigencia de la compañía de seguros; es la garantía de que tu inversión, tu mercadería y, sobre todo, tu personal están protegidos. En Forza Constructora SRL, diseñamos e instalamos sistemas de extinción de última generación que garantizan una respuesta inmediata y efectiva ante cualquier siniestro."
const VALOR_P2 =
  "Proyectamos soluciones hidráulicas de alta gama que combinan tecnología de punta con una ejecución técnica impecable, asegurando que tu planta o complejo cumpla con las normativas locales e internacionales más exigentes."

// ── Módulo 2: Especificaciones Técnicas ─────────────────────────
const SPECS_TITULO = "Tecnología Integrada para una Respuesta Crítica."
const SPECS_CARDS = [
  {
    num: "01",
    titulo: "Sistemas de Rociadores (Sprinklers)",
    texto:
      "Instalamos redes de rociadores automáticos diseñados para la detección y extinción temprana. Nuestros sistemas cubren el 100% de la superficie, actuando solo en la zona afectada para minimizar daños colaterales.",
  },
  {
    num: "02",
    titulo: "Red de Hidrantes y Gabinetes",
    texto:
      "Equipamiento estratégico de alto alcance, calculado según la carga de fuego de tu establecimiento. Utilizamos materiales de máxima resistencia para asegurar presión constante y facilidad de maniobra en momentos críticos.",
  },
  {
    num: "03",
    titulo: "Centrales de Bombeo y Reservas",
    texto:
      "Dimensionamos salas de bombas con sistemas de respaldo para garantizar flujo de agua autónomo, incluso ante cortes de energía o fallas en la red pública.",
  },
  {
    num: "04",
    titulo: "Detección e Inteligencia",
    texto:
      "Integramos sensores de humo, calor y llamas con centrales de alarma que permiten una comunicación directa y rápida para la evacuación y aviso a bomberos.",
  },
] as const

// ── Módulo 3: Valor Agregado Forza ──────────────────────────────
const FORZA_TITULO = "Ingeniería Preventiva de Clase Mundial."
const FORZA_ITEMS = [
  {
    Icon: ShieldCheck,
    titulo: "Cumplimiento Normativo Total",
    texto:
      "Diseñamos bajo normas NFPA y regulaciones locales, facilitando la habilitación de tu planta y optimizando los costos de tu póliza de seguro.",
  },
  {
    Icon: Wrench,
    titulo: "Instalación sin Fisuras",
    texto:
      "Al ser expertos en estructuras metálicas y naves industriales, integramos la red de incendio de forma estética y funcional, evitando interferencias con puentes grúa o sistemas de almacenamiento.",
  },
  {
    Icon: CalendarCheck,
    titulo: "Mantenimiento y Auditoría",
    texto:
      "Ofrecemos planes de mantenimiento preventivo para asegurar que el sistema esté 100% operativo el día que realmente se necesite. Realizamos pruebas de presión y limpieza de conductos periódicas.",
  },
  {
    Icon: FileCheck2,
    titulo: "Certificación Técnica",
    texto:
      "Entregamos toda la documentación técnica y planos conforme a obra necesarios para auditorías municipales y provinciales.",
  },
] as const

// ── Módulo 4: CTA Final ──────────────────────────────────────────
const CTA_TITULO = "No esperes a que sea tarde."
const CTA_PARRAFO =
  "El fuego no da segundas oportunidades. Protegé tu capital con un sistema diseñado para ganar la batalla antes de que comience. En Forza Constructora SRL, llevamos la seguridad de tu industria al siguiente nivel."
const CTA_BOTON = "SOLICITAR ASESORAMIENTO TÉCNICO Y RELEVAMIENTO"

export default function RedesIncendioPage() {
  const service = getServiceBySlug("redes-incendio")!

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-brand-dark min-h-[50vh] flex items-end pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <Image
            src="/images/portadas/portada-redes-incendio.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-brand-dark/60" />
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-muted text-sm">
                <li>
                  <Link href="/" className="hover:text-brand-gold transition-colors">
                    Inicio
                  </Link>
                </li>
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

        {/* Módulo 1 — Propuesta de Valor */}
        <section className="bg-brand-surface py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-heading font-black text-4xl text-primary">
              {VALOR_TITULO}
            </h2>
            <p className="text-muted leading-relaxed text-lg mt-6">{VALOR_P1}</p>
            <p className="text-muted leading-relaxed text-lg mt-6">{VALOR_P2}</p>
          </div>
        </section>

        {/* Módulo 2 — Especificaciones Técnicas */}
        <section className="bg-brand-dark py-24">
          <h2 className="font-heading font-black text-4xl text-primary text-center mb-16 px-6">
            {SPECS_TITULO}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6">
            {SPECS_CARDS.map((card) => (
              <div
                key={card.num}
                className="bg-brand-surface p-8 border-t-2 border-brand-gold"
              >
                <span className="font-heading font-black text-5xl text-brand-gold opacity-30 block">
                  {card.num}
                </span>
                <h3 className="text-primary font-bold text-xl mt-4">{card.titulo}</h3>
                <p className="text-muted text-sm leading-relaxed mt-3">{card.texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Módulo 3 — Valor Agregado Forza */}
        <section className="bg-brand-surface py-24 px-6">
          <h2 className="font-heading font-black text-4xl text-primary text-center max-w-3xl mx-auto mb-16">
            {FORZA_TITULO}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {FORZA_ITEMS.map(({ Icon, titulo, texto }) => (
              <div key={titulo} className="bg-brand-dark p-8 flex gap-5 items-start">
                <Icon className="text-brand-gold w-8 h-8 shrink-0" />
                <div>
                  <h3 className="text-primary font-bold text-lg">{titulo}</h3>
                  <p className="text-muted text-sm leading-relaxed mt-1">{texto}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Módulo 4 — CTA Final */}
        <section className="bg-brand-dark bg-blueprint py-24 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-black text-4xl text-primary mb-8">
              {CTA_TITULO}
            </h2>
            <p className="text-muted text-lg leading-relaxed">{CTA_PARRAFO}</p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <Flame className="text-brand-gold/40 w-6 h-6" />
              <Flame className="text-brand-gold/40 w-6 h-6" />
              <Flame className="text-brand-gold/40 w-6 h-6" />
            </div>
            <Link
              href="#contacto"
              className="inline-flex items-center gap-3 bg-brand-gold text-brand-dark font-bold tracking-widest px-12 py-5 mt-10 hover:brightness-110 transition-all"
            >
              {CTA_BOTON}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
