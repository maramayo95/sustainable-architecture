"use client";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DrawerProps {
  links: { href: string; label: string }[];
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function NavbarMobile({
  links,
  isOpen,
  setIsOpen,
}: DrawerProps) {
  return (
    <main
      className={
        "fixed inset-0 z-50 flex justify-end transition-transform duration-500 ease-in-out " +
        (isOpen ? "translate-x-0" : "translate-x-full")
      }
    >
      <section className="w-screen max-w-xs h-full bg-white shadow-xl flex flex-col">
        {/* Header con botón de cierre */}
        <header className="flex justify-between items-center p-6 border-b">
          <p className="text-lg tracking-wide hover:text-primary transition-colors  uppercase">Terra</p>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="text-black hover:bg-transparent"
          >
            <X className="h-6 w-6" />
          </Button>
        </header>

        {/* Enlaces */}
        <article className="flex flex-col space-y-6 p-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg tracking-wide hover:text-primary transition-colors  uppercase"
            >
              {link.label}
            </Link>
          ))}
        </article>
      </section>
    </main>
  );
}
