import { Leaf, Layers, Home } from "lucide-react"

const pillars = [
  {
    icon: Leaf,
    title: "Energía",
    description:
      "Diseño pasivo que minimiza la demanda energética. Orientación solar, inercia térmica y ventilación cruzada como estrategias proyectuales.",
    metrics: "EUI < 40 kWh/m²·año",
  },
  {
    icon: Layers,
    title: "Materialidad",
    description:
      "Selección de materiales de bajo impacto ambiental, locales y renovables. Ciclo de vida completo y economía circular.",
    metrics: "Huella de carbono reducida 60%",
  },
  {
    icon: Home,
    title: "Confort",
    description:
      "Espacios saludables con calidad de aire interior, iluminación natural y confort térmico sin comprometer el bienestar humano.",
    metrics: "Confort térmico 95% del año",
  },
]

export function Manifesto() {
  return (
    <section id="manifiesto" className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-6 text-balance">Nuestro manifiesto</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            La arquitectura sostenible no es una tendencia, es una responsabilidad. Diseñamos desde tres pilares
            fundamentales que guían cada decisión proyectual.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {pillars.map((pillar, index) => (
            <div key={index} className="group">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <pillar.icon className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-3xl font-light mb-4">{pillar.title}</h3>

              <p className="text-muted-foreground leading-relaxed mb-4">{pillar.description}</p>

              <p className="font-mono text-sm text-primary uppercase tracking-wide">{pillar.metrics}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
