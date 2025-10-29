import React from "react"
import Link from "next/link"

interface NavLink {
  href: string
  label: string
}

interface NavbarProps {
  brand?: string
  links: NavLink[]
  scrolled?: boolean
  className?: string
}

export function NavbarDesktop({ brand = "Brand", links, scrolled = false, className = "" }: NavbarProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b" : "bg-white"
      } ${className}`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="#inicio" className="font-serif text-2xl font-light tracking-tight">
            {brand}
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
