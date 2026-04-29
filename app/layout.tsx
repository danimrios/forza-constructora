import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import "./globals.css"

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
  title: "Forza Constructora SRL",
  description:
    "Empresa constructora argentina especializada en complejos deportivos, arquitectura metálica, soluciones industriales y redes de incendio. Llave en mano.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${inter.variable}`}
    >
      <body className="bg-brand-dark text-primary font-body antialiased">{children}</body>
    </html>
  )
}
