import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center"
    >
      {/* Columna izquierda: texto */}
      <div className="z-10 container mx-auto px-6 lg:px-12 text-center lg:text-left">
        <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl font-light text-foreground mb-8 leading-tight">
          Espacios con baja huella
          y alto impacto humano
        </h1>

        <p className="font-mono text-sm md:text-base text-foreground/80 mb-12 max-w-md tracking-wide uppercase">
          Diseño bioclimático · Eficiencia energética · Materialidad consciente
        </p>

        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono uppercase tracking-wider group border"
          asChild
        >
          <Link href="#contacto">
            Solicitar anteproyecto
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>

      {/* Columna derecha: imagen */}
      <div className="w-full h-full">
        <img
          src="/modern-sustainable-architecture-building-with-natu.jpg"
          alt="Arquitectura sostenible"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
