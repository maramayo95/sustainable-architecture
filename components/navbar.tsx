"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#manifiesto", label: "Manifiesto" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#proceso", label: "Proceso" },
    { href: "#materiales", label: "Materiales" },
    { href: "#prensa", label: "Prensa" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="#inicio" className="font-serif text-2xl font-light tracking-tight">
            TERRA
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide hover:text-primary transition-colors font-mono uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
