"use client";

import { useState, useEffect } from "react";

import { NavbarDesktop } from "./navbar-desktop";
import NavbarMobile from "./ui/navbar-mobile";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#manifiesto", label: "Manifiesto" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#proceso", label: "Proceso" },
    { href: "#materiales", label: "Materiales" },
    { href: "#prensa", label: "Prensa" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <>
      <div className="hidden lg:block">
        <NavbarDesktop brand="TERRA" scrolled={scrolled} links={links} />
      </div>

      <div className="fixed top-0 left-0 right-0 z-50 lg:hidden p-4 bg-white border-b">
        <div className="flex items-center justify-between">
          {/* Branding a la izquierda */}
          <Link
            href="#inicio"
            className="font-serif text-2xl font-light tracking-tight"
          >
            TERRA
          </Link>

          {/* Botón menú a la derecha */}
          <Button
            size="lg"
            className="bg-white border text-primary-foreground font-mono uppercase tracking-wider"
            onClick={() => setIsMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        <NavbarMobile
          links={links}
          isOpen={isMobileOpen}
          setIsOpen={setIsMobileOpen}
        />
      </div>
    </>
  );
}
