"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { SERVICES } from "@/lib/services"

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
]

const NAV_SERVICES = SERVICES.filter((s) => s.showInGrid || s.slug === "complejos-deportivos" || s.slug === "edificios")

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
              <Link href="/" className="text-primary hover:text-brand-gold transition-colors duration-200 text-base font-semibold tracking-wide">
                Inicio
              </Link>
            </li>

            {/* Servicios dropdown */}
            <li className="relative group">
              <button className="flex items-center gap-1 text-primary hover:text-brand-gold transition-colors duration-200 text-base font-semibold tracking-wide">
                Servicios
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
                <div className="bg-brand-dark border border-white/10 py-2 min-w-[220px]">
                  <Link
                    href="/#servicios"
                    className="block px-5 py-2.5 text-muted hover:text-brand-gold hover:bg-white/5 transition-colors text-sm"
                  >
                    Ver todos los servicios
                  </Link>
                  <div className="border-t border-white/5 my-1" />
                  {NAV_SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={s.href}
                      className="block px-5 py-2.5 text-muted hover:text-brand-gold hover:bg-white/5 transition-colors text-sm"
                    >
                      {s.title}
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

        <nav className="flex flex-col px-6 py-8 gap-6">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-primary hover:text-brand-gold transition-colors duration-200 text-xl font-semibold">
            Inicio
          </Link>
          <div>
            <span className="text-primary text-xl font-semibold">Servicios</span>
            <div className="flex flex-col gap-3 mt-3 pl-4 border-l border-white/10">
              {NAV_SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={s.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted hover:text-brand-gold transition-colors duration-200 text-base"
                >
                  {s.title}
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
