"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Menu,
  X,
  ChevronDown,
  Trophy,
  Building2,
  Wrench,
  Factory,
  Home,
  Flame,
} from "lucide-react"

const NAV_LINKS = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/#contacto" },
]

const DROPDOWN_ITEMS = [
  {
    Icon: Trophy,
    label: "Complejos Deportivos",
    tagline: "Pádel y deportes llave en mano",
    href: "/servicios/complejos-deportivos",
  },
  {
    Icon: Building2,
    label: "Arquitectura Metálica",
    tagline: "Edificios y casas en estructura de acero",
    href: "/servicios/arquitectura-metalica",
  },
  {
    Icon: Wrench,
    label: "Reparación y Mantenimiento",
    tagline: "Intervención sin frenar tu producción",
    href: "/servicios/mantenimiento",
  },
  {
    Icon: Factory,
    label: "Soluciones Industriales",
    tagline: "Naves, galpones y depósitos",
    href: "/servicios/industrial",
  },
  {
    Icon: Home,
    label: "Viviendas Steel Frame",
    tagline: "Construcción en seco de alta prestación",
    href: "/servicios/viviendas",
  },
  {
    Icon: Flame,
    label: "Redes de Incendio",
    tagline: "Sistemas contra incendio de alta gama",
    href: "/servicios/redes-incendio",
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "bg-brand-dark/60 backdrop-blur-md border-white/5"
            : "bg-brand-dark/95 backdrop-blur border-white/10"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logos/Logo-forzaz.png"
              alt="Forza Constructora SRL"
              width={280}
              height={90}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10">
            <li>
              <Link
                href="/"
                className="text-primary hover:text-brand-gold transition-colors duration-200 text-base font-semibold tracking-wide"
              >
                Inicio
              </Link>
            </li>

            {/* Servicios dropdown */}
            <li className="relative group">
              <button className="flex items-center gap-1 text-primary hover:text-brand-gold transition-colors duration-200 text-base font-semibold tracking-wide">
                Servicios
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {/* Dropdown panel */}
              <div
                className="
                  absolute top-full left-0 pt-3 z-50
                  opacity-0 -translate-y-1 pointer-events-none
                  group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                  transition-all duration-200 ease-out
                "
              >
                <div className="bg-brand-dark border border-white/10 shadow-2xl min-w-[280px]">
                  {DROPDOWN_ITEMS.map((item, i) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`
                        flex items-center gap-4 py-4 pl-[18px] pr-5
                        border-l-2 border-transparent
                        hover:border-brand-gold hover:bg-brand-surface
                        transition-colors duration-150
                        ${i < DROPDOWN_ITEMS.length - 1 ? "border-b border-white/5" : ""}
                      `}
                    >
                      <item.Icon className="text-brand-gold w-5 h-5 shrink-0" />
                      <div>
                        <p className="text-primary text-sm font-semibold">{item.label}</p>
                        <p className="text-muted text-xs mt-0.5">{item.tagline}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-primary hover:text-brand-gold transition-colors duration-200 text-base font-semibold tracking-wide"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/#contacto"
            className="hidden md:inline-block bg-brand-gold text-brand-dark font-semibold px-6 py-2.5 text-base rounded-none hover:brightness-110 transition-all"
          >
            Consultá tu proyecto
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-primary p-2"
            onClick={() => setIsOpen(true)}
            aria-label="Abrir menú de navegación"
          >
            <Menu className="w-7 h-7" />
          </button>
        </nav>
      </header>

      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-brand-dark z-50 flex flex-col transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
          <Image
            src="/logos/Logo-forzaz.png"
            alt="Forza Constructora SRL"
            width={220}
            height={72}
            className="h-16 w-auto object-contain"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="text-primary p-2"
            aria-label="Cerrar menú de navegación"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-8 gap-6 overflow-y-auto">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-primary hover:text-brand-gold transition-colors duration-200 text-xl font-semibold"
          >
            Inicio
          </Link>
          <div>
            <span className="text-primary text-xl font-semibold">Servicios</span>
            <div className="flex flex-col gap-3 mt-3 pl-4 border-l border-white/10">
              {DROPDOWN_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted hover:text-brand-gold transition-colors duration-200 text-base"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-primary hover:text-brand-gold transition-colors duration-200 text-xl font-semibold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="px-6 mt-auto pb-8">
          <Link
            href="/#contacto"
            onClick={() => setIsOpen(false)}
            className="block bg-brand-gold text-brand-dark font-semibold px-5 py-3 text-center rounded-none hover:brightness-110 transition-all"
          >
            Consultá tu proyecto
          </Link>
        </div>
      </aside>
    </>
  )
}
