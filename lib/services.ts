export interface Service {
  slug: string
  category: string
  title: string
  tagline: string
  description: string
  features: string[]
  imagePlaceholder: string
  href: string
  featured: boolean
  showInGrid: boolean
}

export const SERVICES: Service[] = [
  {
    slug: "complejos-deportivos",
    category: "Servicio Destacado",
    title: "Complejos Deportivos",
    tagline: "Tu complejo de pádel llave en mano.",
    description:
      "La ejecución de complejos deportivos de alto rendimiento exige precisión y gestión integral. En Forza unificamos todas las etapas: desde movimiento de suelos y estructura, hasta terminaciones premium.",
    features: [
      "Movimiento de suelos",
      "Estructura completa",
      "Terminaciones premium",
      "Gestión integral del proyecto",
    ],
    imagePlaceholder: "#1a1a1a",
    href: "/servicios/complejos-deportivos",
    featured: false,
    showInGrid: false,
  },
  {
    slug: "edificios",
    category: "Servicio Destacado",
    title: "Edificios en Estructura Metálica",
    tagline: "Edificios con alma de acero.",
    description:
      "Diseñamos y ejecutamos edificios de varios niveles con ingeniería de precisión en acero galvanizado. Grandes luces, plantas libres y fachadas de alto rendimiento que reducen tiempos de obra y huella de carbono.",
    features: [
      "Grandes luces y plantas libres",
      "Menor huella de carbono",
      "Fachadas multicapa de alto aislamiento",
      "Precisión milimétrica ensamblada con software",
      "Materiales incombustibles sin grietas",
    ],
    imagePlaceholder: "#1a1a1a",
    href: "/servicios/edificios",
    featured: false,
    showInGrid: false,
  },
  {
    slug: "mantenimiento",
    category: "Industrial",
    title: "Reparación y Mantenimiento",
    tagline: "Pisos, estructuras y pavimentos al máximo rendimiento.",
    description:
      "Reparación y mantenimiento de pisos de hormigón industrial, recuperación de pavimentos y tratamiento de estructuras. Soluciones integrales para mantener tu planta operativa y segura.",
    features: [
      "Pisos de hormigón industrial",
      "Recuperación de pavimentos",
      "Tratamiento de estructuras",
      "Mantenimiento preventivo y correctivo",
    ],
    imagePlaceholder: "#1a1a1a",
    href: "/servicios/mantenimiento",
    featured: false,
    showInGrid: true,
  },
  {
    slug: "industrial",
    category: "Industrial",
    title: "Soluciones Industriales Integrales",
    tagline: "Sin frenar tu producción.",
    description:
      "Diseñamos y ejecutamos naves, galpones y depósitos priorizando seguridad, funcionalidad y logística de operación. Recuperación de pavimentos, tratamiento de estructuras y mantenimiento integral de plantas industriales.",
    features: [
      "Naves y galpones a medida",
      "Recuperación de pavimentos",
      "Tratamiento de estructuras",
      "Mantenimiento preventivo y correctivo",
      "Cumplimiento de normativa vigente",
    ],
    imagePlaceholder: "#1a1a1a",
    href: "/servicios/industrial",
    featured: true,
    showInGrid: true,
  },
  {
    slug: "viviendas",
    category: "Viviendas Premium",
    title: "Viviendas Steel Frame",
    tagline: "Tu hogar de alta gama, construido en meses.",
    description:
      "Viviendas premium con estructura de acero galvanizado (Steel Frame). Construcción en seco de alta prestación con aislamiento térmico superior y tiempos de entrega exactos.",
    features: [
      "Aislamiento térmico superior",
      "Construcción en seco",
      "Llave en mano real",
      "Diseño personalizado",
    ],
    imagePlaceholder: "#1a1a1a",
    href: "/servicios/viviendas",
    featured: false,
    showInGrid: true,
  },
  {
    slug: "redes-incendio",
    category: "Seguridad",
    title: "Redes de Incendio",
    tagline: "Protegé tu inversión con sistemas contra incendio de alta gama.",
    description:
      "La red de incendio no es solo un requisito: es la protección de tu negocio. Diseñamos e instalamos sistemas integrados con respuesta inmediata: rociadores e hidrantes que cubren toda la superficie.",
    features: [
      "Sistemas integrados de alta gama",
      "Rociadores de cobertura total",
      "Hidrantes estratégicos",
      "Cumplimiento normativo completo",
    ],
    imagePlaceholder: "#1a1a1a",
    href: "/servicios/redes-incendio",
    featured: false,
    showInGrid: true,
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
