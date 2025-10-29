import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

const materials = [
  {
    name: "Madera laminada",
    description: "Estructura de pino o eucalipto certificado FSC. Secuestro de carbono y bajo impacto ambiental.",
    certifications: ["FSC", "PEFC"],
    suppliers: ["Maderas del Sur", "Timber Tech"],
    image: "/laminated-wood-beams-construction.jpg",
  },
  {
    name: "Adobe estabilizado",
    description:
      "Bloques de tierra comprimida con estabilizante natural. Excelente inercia térmica y regulación de humedad.",
    certifications: ["IRAM 11.603"],
    suppliers: ["Tierra Viva", "Ecoblock"],
    image: "/stabilized-adobe-blocks-construction.jpg",
  },
  {
    name: "Aislamientos reciclados",
    description: "Celulosa proyectada de papel reciclado y lana de oveja. Alta performance térmica y acústica.",
    certifications: ["IRAM 11.601", "Cradle to Cradle"],
    suppliers: ["Isocel", "Ecofibra"],
    image: "/recycled-cellulose-insulation-installation.jpg",
  },
]

export function Materials() {
  return (
    <section id="materiales" className="py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-6 text-balance">Materiales seleccionados</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Trabajamos con materiales de bajo impacto ambiental, locales y certificados.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <div
              key={index}
              className="bg-card rounded-sm overflow-hidden border border-border hover:border-primary transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={material.image || "/placeholder.svg"}
                  alt={material.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-serif text-2xl font-light">{material.name}</h3>

                <p className="text-sm text-muted-foreground leading-relaxed">{material.description}</p>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3" />
                    Certificaciones
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {material.certifications.map((cert, i) => (
                      <Badge key={i} variant="secondary" className="font-mono text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">Proveedores</h4>
                  <p className="text-sm">{material.suppliers.join(" · ")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
