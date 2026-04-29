import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ContactCTA } from "@/components/home/ContactCTA"
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat"
import {
  ActivitySquare,
  Zap,
  ShieldCheck,
  FileCheck2,
  Map,
  MapPin,
} from "lucide-react"

// ── Textos ───────────────────────────────────────────────────────────────────

const HERO = {
  eyebrow: "EL ADN FORZA",
  heading: "Construimos el soporte de su éxito.",
  subheading:
    "Solidez, ingeniería de precisión y compromiso con la continuidad operativa de cada cliente.",
  capacidad: {
    label: "CAPACIDAD OPERATIVA",
    metric1: "800 m²",
    metric1Text: "de intervención por día en pavimentos industriales",
    metric2: "+100.000 m²",
    metric2Text: "de superficies recuperadas",
  },
}

const MANIFIESTO = {
  label: "QUIÉNES SOMOS",
  heading: "No somos solo una constructora.",
  para1:
    "En Forza Constructora SRL, entendemos que cada metro cuadrado que construimos o reparamos es una pieza clave en el engranaje de su negocio. Nacimos con el propósito de elevar los estándares de la industria, fusionando la robustez de los métodos tradicionales con la eficiencia de la tecnología de vanguardia.",
  para2a: "Somos ",
  para2highlight: "socios estratégicos",
  para2b:
    " de industrias, inversores deportivos y familias. Nuestra diferencia radica en la gestión integral: desde el primer movimiento de suelo hasta la entrega de la llave, cada proceso está supervisado bajo un rigor técnico que garantiza durabilidad y excelencia estética.",
}

const PILARES = {
  label: "NUESTROS PILARES",
  heading: "Valores en acción.",
  items: [
    {
      icon: ActivitySquare,
      title: "Ingeniería de Impacto Cero",
      text: "Planificamos nuestras intervenciones para que su producción nunca se detenga. Sabemos que su tiempo es su recurso más valioso.",
    },
    {
      icon: Zap,
      title: "Innovación en Acero",
      text: "Creemos en la construcción en seco y las estructuras metálicas como el camino hacia un futuro más rápido, sustentable y preciso.",
    },
    {
      icon: ShieldCheck,
      title: "Calidad de Grado Alimentario",
      text: "Nuestra especialización en frigoríficos y plantas industriales nos obliga a mantener estándares de higiene y seguridad superiores a la media del mercado.",
    },
    {
      icon: FileCheck2,
      title: "Cumplimiento y Transparencia",
      text: "Cumplimos con los plazos y presupuestos pactados. En Forza, la palabra y el plano tienen el mismo valor.",
    },
  ],
}

const MAPA = {
  label: "ALCANCE OPERATIVO",
  heading: "Operamos en todo el territorio.",
  mapPlaceholder: "Mapa de operaciones",
  mapBadge: "Buenos Aires · GBA · Interior del País",
  zonas: [
    { name: "CABA", sub: "Sede principal" },
    { name: "Gran Buenos Aires", sub: "Cobertura total" },
    { name: "Interior del País", sub: "Proyectos a distancia" },
  ],
}

// ── Página ───────────────────────────────────────────────────────────────────

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── 1. MANIFIESTO ───────────────────────────────────────────── */}
        <section className="bg-brand-surface py-24 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <p className="text-brand-gold tracking-widest text-xs uppercase mb-6">
                {MANIFIESTO.label}
              </p>
              <h2 className="font-heading font-black text-4xl text-primary leading-tight">
                {MANIFIESTO.heading}
              </h2>
              <div className="w-16 h-1 bg-brand-gold mt-6" />
            </div>

            <div>
              <p className="text-muted leading-relaxed text-lg">
                {MANIFIESTO.para1}
              </p>
              <p className="text-muted leading-relaxed text-lg mt-6">
                {MANIFIESTO.para2a}
                <span className="text-primary font-semibold">
                  {MANIFIESTO.para2highlight}
                </span>
                {MANIFIESTO.para2b}
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. HERO ─────────────────────────────────────────────────── */}
        <section className="relative min-h-[80vh] bg-brand-dark flex items-end pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-blueprint" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-surface/80 via-transparent to-transparent" />

          <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="border-l-2 border-brand-gold pl-4 mb-8 text-brand-gold tracking-[0.4em] text-xs font-semibold uppercase">
                {HERO.eyebrow}
              </p>
              <h1 className="font-heading font-black text-5xl md:text-7xl text-primary leading-none">
                {HERO.heading}
              </h1>
              <p className="mt-6 text-muted text-xl leading-relaxed">
                {HERO.subheading}
              </p>
            </div>

            <div className="lg:self-end">
              <div className="bg-brand-surface border border-white/10 p-8">
                <p className="text-brand-gold text-xs tracking-widest uppercase mb-4">
                  {HERO.capacidad.label}
                </p>
                <p className="font-heading font-black text-5xl text-primary">
                  {HERO.capacidad.metric1}
                </p>
                <p className="text-muted text-sm mt-2">
                  {HERO.capacidad.metric1Text}
                </p>
                <div className="border-t border-white/10 mt-6 pt-6">
                  <p className="font-heading font-black text-3xl text-primary">
                    {HERO.capacidad.metric2}
                  </p>
                  <p className="text-muted text-sm mt-1">
                    {HERO.capacidad.metric2Text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. PILARES ──────────────────────────────────────────────── */}
        <section className="bg-brand-dark py-24 px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand-gold tracking-widest text-xs uppercase mb-4">
              {PILARES.label}
            </p>
            <h2 className="font-heading font-black text-4xl text-primary">
              {PILARES.heading}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {PILARES.items.map((pilar) => (
              <div
                key={pilar.title}
                className="bg-brand-surface p-8 border-l-4 border-brand-gold flex gap-6 items-start"
              >
                <pilar.icon className="text-brand-gold w-8 h-8 shrink-0" />
                <div>
                  <h3 className="text-primary font-bold text-xl">{pilar.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mt-2">{pilar.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. MAPA DE OPERACIONES ──────────────────────────────────── */}
        <section className="bg-brand-dark py-24 px-6">
          <div className="text-center mb-16">
            <p className="text-brand-gold tracking-widest text-xs uppercase mb-4">
              {MAPA.label}
            </p>
            <h2 className="font-heading font-black text-4xl text-primary">
              {MAPA.heading}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-brand-surface border border-white/10 aspect-video flex items-center justify-center relative overflow-hidden">
              <Map className="text-brand-gold/10 w-32 h-32 absolute" />
              <span className="relative text-white/20 text-sm">{MAPA.mapPlaceholder}</span>
              <span className="text-brand-gold text-xs tracking-widest absolute bottom-6">
                {MAPA.mapBadge}
              </span>
            </div>

            <div className="flex justify-center gap-12 mt-10">
              {MAPA.zonas.map((zona) => (
                <div key={zona.name} className="text-center">
                  <MapPin className="text-brand-gold w-5 h-5 mx-auto mb-2" />
                  <p className="text-primary text-sm font-semibold">{zona.name}</p>
                  <p className="text-muted text-xs mt-1">{zona.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
