import Link from "next/link"
import Image from "next/image"
import { Warehouse, Building2, Layers, HardHat, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ContactCTA } from "@/components/home/ContactCTA"
import { getServiceBySlug } from "@/lib/services"
import { WA_PROYECTO_METALICO } from "@/lib/whatsapp"

export const metadata = {
  title: "Edificios en Estructura Metálica — Forza Constructora SRL",
  description:
    "Diseño y ejecución de edificios de varios niveles con acero galvanizado. Grandes luces, plantas libres y fachadas de alto rendimiento.",
}

const PROPUESTA_VALOR = {
  heading: "Edificación Inteligente: Estructuras Metálicas de Alta Ingeniería.",
  p1: "La construcción en acero representa la evolución de la eficiencia en el sector civil e industrial. En Forza Constructora SRL, diseñamos y ejecutamos edificios con estructura metálica que combinan ligereza, máxima resistencia y una velocidad de montaje imposible de alcanzar con métodos tradicionales.",
  p2: "Proyectamos soluciones versátiles que permiten plantas libres de grandes luces, optimizando el espacio útil y facilitando futuras ampliaciones o modificaciones. Con Forza, su inversión se transforma en metros cuadrados operativos en tiempo récord.",
}

const DESGLOSE_HEADING = "Eficiencia Estructural y Versatilidad de Diseño."

const DESGLOSE = [
  {
    number: "01",
    title: "Velocidad de Ejecución",
    text: "Reducimos los tiempos de obra hasta en un 40% en comparación con el hormigón armado. Las piezas llegan pre-fabricadas a la obra, permitiendo un montaje seco, limpio y acelerado.",
  },
  {
    number: "02",
    title: "Precisión Milimétrica",
    text: "Utilizamos ingeniería asistida por computadora para que cada componente encaje a la perfección. Esto elimina los errores de obra y garantiza una estructura perfectamente plomada y nivelada.",
  },
  {
    number: "03",
    title: "Sostenibilidad y Flexibilidad",
    text: "El acero es un material 100% reciclable. Además, las estructuras metálicas permiten grandes espacios sin columnas intermedias, ideales para oficinas, centros logísticos y naves industriales modernas.",
  },
  {
    number: "04",
    title: "Optimización de Costos",
    text: "Al ser una estructura más liviana, se reducen los costos en las fundaciones y movimientos de suelo, logrando un equilibrio financiero superior para el inversor.",
  },
]

const ALCANCE_HEADING = "Soluciones integrales para proyectos exigentes."

const ALCANCE = [
  {
    Icon: Warehouse,
    title: "Naves Industriales y Centros Logísticos",
    text: "Estructuras diseñadas para soportar cargas dinámicas y grandes luces de almacenamiento.",
  },
  {
    Icon: Building2,
    title: "Edificios de Oficinas y Locales Comerciales",
    text: "Estética moderna con fachadas que integran vidrio, paneles térmicos y otros acabados de tendencia.",
  },
  {
    Icon: Layers,
    title: "Ampliaciones y Entrepisos",
    text: "Soluciones rápidas para aumentar la superficie operativa de plantas existentes sin comprometer la estructura actual.",
  },
  {
    Icon: HardHat,
    title: "Montaje Especializado",
    text: "Contamos con personal certificado y equipamiento propio para garantizar la seguridad y la calidad técnica en cada unión y soldadura.",
  },
]

const CTA_METALICO = {
  heading: "Seguridad y Respaldo Técnico.",
  body: "No levantamos solo estructuras; construimos confianza basada en cálculos estructurales precisos y normas de seguridad internacionales. En Forza Constructora SRL, cada viga y cada columna son parte de un compromiso con la excelencia y la durabilidad.",
  cta: "CONSULTAR POR MI PROYECTO METÁLICO",
}

const VENTAJAS = [
  {
    title: "Velocidad de obra",
    description:
      "La estructura metálica prefabricada reduce los tiempos de construcción hasta un 40% respecto a la obra tradicional.",
  },
  {
    title: "Plantas libres",
    description:
      "Grandes luces sin columnas intermedias que permiten diseños flexibles y adaptables a cualquier uso.",
  },
  {
    title: "Sustentabilidad",
    description:
      "Menor huella de carbono, materiales reciclables y reducción significativa de residuos en obra.",
  },
  {
    title: "Durabilidad",
    description:
      "Acero galvanizado resistente a la corrosión, sin grietas ni humedades. Estructura que dura décadas.",
  },
]

export default function EdificiosPage() {
  const service = getServiceBySlug("edificios")!

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-brand-dark min-h-[50vh] flex items-end pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <Image
            src="/images/portadas/portada-edificios.png"
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
              {PROPUESTA_VALOR.heading}
            </h2>
            <p className="text-muted leading-relaxed text-lg mt-6">{PROPUESTA_VALOR.p1}</p>
            <p className="text-muted leading-relaxed text-lg mt-6">{PROPUESTA_VALOR.p2}</p>
          </div>
        </section>

        {/* Módulo 2 — Desglose Técnico */}
        <section className="bg-brand-dark py-24">
          <h2 className="font-heading font-black text-4xl text-primary mb-16 text-center px-6">
            {DESGLOSE_HEADING}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6">
            {DESGLOSE.map((item) => (
              <article key={item.number} className="bg-brand-surface p-8 border-t-2 border-brand-gold">
                <span className="text-brand-gold font-black text-5xl font-heading opacity-30">
                  {item.number}
                </span>
                <h3 className="text-primary font-bold text-xl mt-4">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed mt-3">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Módulo 3 — Alcance del Servicio */}
        <section className="bg-brand-surface py-24 px-6">
          <h2 className="font-heading font-black text-4xl text-primary mb-16 text-center max-w-3xl mx-auto">
            {ALCANCE_HEADING}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {ALCANCE.map((item) => (
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

        {/* Módulo 4 — CTA Final */}
        <section className="relative bg-brand-dark py-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-blueprint" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-black text-4xl text-primary mb-8">
              {CTA_METALICO.heading}
            </h2>
            <p className="text-muted text-lg leading-relaxed">{CTA_METALICO.body}</p>
            <a
              href={WA_PROYECTO_METALICO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-gold text-brand-dark font-bold tracking-widest px-12 py-5 mt-10 hover:brightness-110 transition-all"
            >
              {CTA_METALICO.cta}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Ventajas */}
        <section className="bg-brand-dark py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading font-black text-3xl text-primary mb-12 text-center">
              ¿Por qué estructura metálica?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {VENTAJAS.map((v) => (
                <article key={v.title} className="bg-brand-surface border-t-2 border-brand-gold p-8">
                  <h3 className="font-heading font-bold text-primary text-xl mb-3">{v.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{v.description}</p>
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
