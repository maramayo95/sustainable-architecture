import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Casa Tierra",
    location: "Córdoba, Argentina",
    year: "2023",
    image: "/sustainable-earth-house-with-natural-materials.jpg",
    beforeImage: "/old-traditional-house-before-renovation.jpg",
    eui: "32 kWh/m²·año",
    materials: ["Adobe estabilizado", "Madera laminada", "Aislamiento de celulosa"],
    cost: "USD 850/m²",
    description: "Rehabilitación de vivienda rural con técnicas de construcción en tierra y diseño bioclimático.",
  },
  {
    title: "Estudio Verde",
    location: "Mendoza, Argentina",
    year: "2024",
    image: "/modern-green-office-building-with-vertical-gardens.jpg",
    beforeImage: "/empty-urban-lot-before-construction.jpg",
    eui: "28 kWh/m²·año",
    materials: ["Estructura de madera", "Fachada ventilada", "Cubierta verde"],
    cost: "USD 1,200/m²",
    description: "Espacio de trabajo con certificación LEED Gold y consumo energético casi nulo.",
  },
  {
    title: "Vivienda Pasiva",
    location: "Bariloche, Argentina",
    year: "2023",
    image: "/passive-house-in-mountain-landscape-with-large-win.jpg",
    beforeImage: "/mountain-terrain-before-construction.jpg",
    eui: "15 kWh/m²·año",
    materials: ["Paneles SIP", "Triple vidriado", "Recuperador de calor"],
    cost: "USD 1,450/m²",
    description: "Primera casa pasiva certificada de la región patagónica.",
  },
]

export function Projects() {
  return (
    <section id="proyectos" className="py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-6 text-balance">Proyectos realizados</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada proyecto es un estudio de caso en eficiencia energética y diseño consciente.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <article key={index} className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Images */}
              <div className="space-y-6">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-white text-foreground font-mono">Después</Badge>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={project.beforeImage || "/placeholder.svg"}
                    alt={`${project.title} - Antes`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-white text-foreground font-mono">Antes</Badge>
                </div>
              </div>

              {/* Details */}
              <div className="lg:sticky  lg:top-32">
                <div className="flex items-center gap-4 mb-4 font-mono text-sm text-muted-foreground uppercase tracking-wide">
                  <span>{project.location}</span>
                  <span>·</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="font-serif text-4xl font-light mb-6">{project.title}</h3>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">{project.description}</p>

                {/* Technical Specs */}
                <div className="space-y-6 border-t border-border pt-8">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Consumo energético (EUI)
                    </h4>
                    <p className="text-2xl font-serif text-primary">{project.eui}</p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Materiales principales
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.materials.map((material, i) => (
                        <Badge key={i} variant="secondary" className="font-mono text-xs">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Costo por m²
                    </h4>
                    <p className="text-2xl font-serif">{project.cost}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
