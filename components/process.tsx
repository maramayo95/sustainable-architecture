import { FileText, Pencil, FileCheck, HardHat } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Brief",
    description: "Relevamiento de necesidades, análisis del sitio y definición de objetivos de sustentabilidad.",
    deliverables: ["Informe de sitio", "Programa de necesidades", "Objetivos energéticos"],
  },
  {
    number: "02",
    icon: Pencil,
    title: "Anteproyecto",
    description: "Propuesta conceptual con estrategias bioclimáticas, volumetría y estimación de costos.",
    deliverables: ["Plantas y cortes", "Renders", "Simulación energética", "Presupuesto estimado"],
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Documentación",
    description: "Desarrollo de planos ejecutivos, especificaciones técnicas y gestión de permisos.",
    deliverables: ["Planos constructivos", "Pliegos técnicos", "Cómputos y presupuestos"],
  },
  {
    number: "04",
    icon: HardHat,
    title: "Dirección",
    description: "Supervisión de obra, control de calidad y verificación del cumplimiento de estándares.",
    deliverables: ["Inspecciones semanales", "Certificación de obra", "Test de hermeticidad"],
  },
]

export function Process() {
  return (
    <section id="proceso" className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-6 text-balance">Proceso de trabajo</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un método estructurado que garantiza resultados medibles en cada etapa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-border -z-10" />
              )}

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-3xl font-light text-muted-foreground">{step.number}</span>
                </div>

                <h3 className="font-serif text-2xl font-light">{step.title}</h3>

                <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">Entregables</h4>
                  <ul className="space-y-2">
                    {step.deliverables.map((item, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
