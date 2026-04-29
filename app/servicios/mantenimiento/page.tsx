import Link from "next/link"
import Image from "next/image"
import {
  Hammer,
  SplitSquareVertical,
  Droplets,
  PaintBucket,
  ScanLine,
  Moon,
  PackageCheck,
  HardHat,
  CheckSquare,
  ArrowRight,
} from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ContactCTA } from "@/components/home/ContactCTA"
import { getServiceBySlug } from "@/lib/services"
import { WA_MANTENIMIENTO } from "@/lib/whatsapp"

export const metadata = {
  title: "Reparación y Mantenimiento Industrial — Forza Constructora SRL",
  description:
    "Reparación de pisos de hormigón industrial, saneamiento de juntas, impermeabilización y pintura de estructuras. Soluciones para plantas activas sin parar la producción.",
}

// ── Módulo 1: Propuesta de Valor ────────────────────────────────
const VALOR_HEADING =
  "Ingeniería de Mantenimiento: Extendiendo la vida útil de tu infraestructura."
const VALOR_P1 =
  "Una planta industrial es un activo que sufre un desgaste constante. Ignorar el deterioro no solo afecta la estética, sino que compromete la seguridad operativa y eleva los costos de reparación a largo plazo. En Forza Constructora SRL, ofrecemos un servicio de mantenimiento y reparación técnica diseñado para devolverle a su establecimiento el estándar de eficiencia que su producción requiere."
const VALOR_P2 =
  "Intervenimos de manera estratégica para que cada reparación sea una mejora definitiva, utilizando tecnología que nos permite trabajar en entornos activos sin interrumpir sus flujos de trabajo."

// ── Dato de Impacto ──────────────────────────────────────────────
const IMPACTO_NUM = "70%"
const IMPACTO_TEXTO =
  "de las roturas de carretillas elevadoras son causadas por el mal estado de las juntas y el pavimento."
const IMPACTO_FUENTE = "— Dato técnico de referencia del sector"

// ── Módulo 2: Especialidades Técnicas ───────────────────────────
const SPECS_HEADING = "Reparaciones de Alto Impacto y Bajo Downtime."
const SPECS = [
  {
    Icon: Hammer,
    num: "01",
    title: "Reconstrucción de Pisos y Pavimentos",
    text: "Tratamos baches, cráteres y desprendimientos de masa en hormigones industriales. No solo rellenamos; saneamos la base y aplicamos morteros de alta resistencia para un tránsito pesado inmediato.",
  },
  {
    Icon: SplitSquareVertical,
    num: "02",
    title: "Saneamiento de Juntas de Dilatación",
    text: "Las juntas son el punto más débil de un piso. Las reconstruimos y sellamos con materiales elásticos de alta tecnología que soportan el paso de autoelevadores sin desgranarse.",
  },
  {
    Icon: Droplets,
    num: "03",
    title: "Impermeabilización de Cubiertas y Techos",
    text: "Eliminamos filtraciones y humedades en grandes superficies de chapas o losas. Realizamos limpieza de canaletas, sellado de tornillería y aplicación de membranas líquidas industriales con garantía de estanqueidad.",
  },
  {
    Icon: PaintBucket,
    num: "04",
    title: "Refuerzo y Pintura de Estructuras",
    text: "Protegemos el esqueleto de su planta. Aplicamos esquemas de pintura ignífuga, epóxica y anticorrosiva para evitar el colapso por oxidación o agentes químicos.",
  },
]

// ── Módulo 3: El Método Forza ────────────────────────────────────
const METODO_HEADING = "¿Por qué confiar el mantenimiento de su planta a Forza?"
const METODO = [
  {
    Icon: ScanLine,
    title: "Diagnóstico con Tecnología Láser",
    text: "No adivinamos. Medimos niveles y desgaste estructural para atacar el problema desde la raíz técnica.",
  },
  {
    Icon: Moon,
    title: "Logística Turno Noche / Fin de Semana",
    text: "Entendemos que su planta no para. Adaptamos nuestros equipos de trabajo para intervenir en las ventanas de tiempo que menos afecten su productividad.",
  },
  {
    Icon: PackageCheck,
    title: "Materiales de Grado Industrial",
    text: "Utilizamos insumos de alta gama que superan las exigencias de tránsito y limpieza química agresiva de frigoríficos y plantas logísticas.",
  },
  {
    Icon: HardHat,
    title: "Seguridad y Normativa",
    text: "Todo nuestro personal trabaja bajo estrictos protocolos de Seguridad e Higiene, cumpliendo con las exigencias de ART y certificaciones de calidad vigentes.",
  },
]

// ── Checklist ────────────────────────────────────────────────────
const CHECKLIST_HEADING = "Puntos críticos que revisamos"
const CHECKLIST_ITEMS = [
  "Estado de juntas de dilatación",
  "Filtraciones en techos y cubiertas",
  "Pintura de seguridad vial interna",
  "Nivelación de pavimentos",
  "Corrosión en estructura metálica",
  "Impermeabilización de perímetros",
]

// ── Módulo 4: CTA Final ──────────────────────────────────────────
const CTA_HEADING = "El mantenimiento preventivo es la inversión más inteligente."
const CTA_BODY =
  "No espere a que una auditoría repruebe su planta o que una máquina se rompa por el mal estado del suelo. En Forza Constructora SRL, transformamos entornos degradados en superficies de alto rendimiento, asegurando la continuidad de su negocio."
const CTA_BOTON = "SOLICITAR RELEVAMIENTO TÉCNICO SIN CARGO"

export default function MantenimientoPage() {
  const service = getServiceBySlug("mantenimiento")!

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-brand-dark min-h-[50vh] flex items-end pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <Image
            src="/images/portadas/portada-seccion-mantenimientos-industriales.png"
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
              {VALOR_HEADING}
            </h2>
            <p className="text-muted leading-relaxed text-lg mt-6">{VALOR_P1}</p>
            <p className="text-muted leading-relaxed text-lg mt-6">{VALOR_P2}</p>
          </div>
        </section>

        {/* Dato de Impacto */}
        <div className="bg-brand-dark border-y border-brand-gold/20 py-14">
          <div className="max-w-2xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <span className="font-heading font-black text-7xl text-brand-gold shrink-0">
                {IMPACTO_NUM}
              </span>
              <div>
                <p className="text-primary text-lg leading-relaxed">{IMPACTO_TEXTO}</p>
                <p className="text-muted text-xs mt-2">{IMPACTO_FUENTE}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Módulo 2 — Especialidades Técnicas */}
        <section className="bg-brand-dark py-24">
          <h2 className="font-heading font-black text-4xl text-primary mb-16 text-center px-6">
            {SPECS_HEADING}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6">
            {SPECS.map((item) => (
              <article key={item.num} className="bg-brand-surface p-8 border-t-2 border-brand-gold">
                <item.Icon className="text-brand-gold w-8 h-8 mb-4" />
                <span className="text-brand-gold/30 font-black text-3xl font-heading block">
                  {item.num}
                </span>
                <h3 className="text-primary font-bold text-xl mt-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed mt-3">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Módulo 3 — El Método Forza */}
        <section className="bg-brand-surface py-24 px-6">
          <h2 className="font-heading font-black text-4xl text-primary mb-16 text-center max-w-3xl mx-auto">
            {METODO_HEADING}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {METODO.map((item) => (
              <div key={item.title} className="bg-brand-dark p-8 flex gap-5 items-start">
                <item.Icon className="text-brand-gold w-8 h-8 shrink-0" />
                <div>
                  <h3 className="text-primary font-bold text-lg">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mt-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Checklist */}
        <section className="bg-brand-dark py-16 px-6">
          <p className="text-muted text-sm tracking-widest uppercase mb-10 text-center">
            {CHECKLIST_HEADING}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {CHECKLIST_ITEMS.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-brand-surface px-5 py-3">
                <CheckSquare className="text-brand-gold w-5 h-5 shrink-0" />
                <span className="text-primary text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Módulo 4 — CTA Final */}
        <section className="relative bg-brand-surface py-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-blueprint" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-black text-4xl text-primary mb-8">
              {CTA_HEADING}
            </h2>
            <p className="text-muted text-lg leading-relaxed">{CTA_BODY}</p>
            <a
              href={WA_MANTENIMIENTO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-gold text-brand-dark font-bold tracking-widest px-12 py-5 mt-10 hover:brightness-110 transition-all"
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
