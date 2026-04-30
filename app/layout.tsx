import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-montserrat",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://forzaconstructora.com.ar'),
  title: {
    default: 'Forza Constructora SRL | Construcción Llave en Mano',
    template: '%s | Forza Constructora SRL',
  },
  description: 'Constructora especializada en complejos deportivos, estructuras metálicas, soluciones industriales y redes de incendio en Buenos Aires, Argentina.',
  keywords: [
    'constructora Buenos Aires',
    'complejos de padel llave en mano',
    'estructuras metálicas Argentina',
    'galpones industriales',
    'redes de incendio',
    'construcción industrial GBA',
    'Forza Constructora',
  ],
  authors: [{ name: 'Forza Constructora SRL' }],
  creator: 'Forza Constructora SRL',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://forzaconstructora.com.ar',
    siteName: 'Forza Constructora SRL',
    title: 'Forza Constructora SRL | Construcción Llave en Mano',
    description: 'Especialistas en complejos deportivos, estructuras metálicas y soluciones industriales en Buenos Aires.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Forza Constructora SRL',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forza Constructora SRL',
    description: 'Construcción llave en mano en Buenos Aires.',
    images: ['/og-image.jpg'],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Forza Constructora SRL",
  "url": "https://forzaconstructora.com.ar",
  "logo": "https://forzaconstructora.com.ar/images/logos/logo.png",
  "description": "Constructora especializada en complejos deportivos, estructuras metálicas, soluciones industriales y redes de incendio.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Los Polvorines",
    "addressRegion": "Buenos Aires",
    "addressCountry": "AR"
  },
  "areaServed": ["Buenos Aires", "GBA", "Argentina"],
  "serviceType": [
    "Complejos Deportivos",
    "Arquitectura Metálica",
    "Soluciones Industriales",
    "Viviendas Steel Frame",
    "Redes de Incendio",
    "Mantenimiento Industrial"
  ]
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${inter.variable}`}
    >
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-dark text-primary font-body antialiased">
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  )
}
