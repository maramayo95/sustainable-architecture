const metrics = [
  {
    value: "2.4M",
    unit: "kWh",
    label: "Energía ahorrada",
    description: "Equivalente a 180 hogares durante un año",
  },
  {
    value: "420",
    unit: "ton CO₂",
    label: "Emisiones evitadas",
    description: "Igual a plantar 19,000 árboles",
  },
  {
    value: "1.8M",
    unit: "litros",
    label: "Agua conservada",
    description: "Sistemas de captación y reutilización",
  },
  {
    value: "15",
    unit: "proyectos",
    label: "Obras certificadas",
    description: "LEED, Passivhaus y EDGE",
  },
]

export function Impact() {
  return (
    <section className="py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-6 text-balance">Impacto medible</h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            Cada decisión de diseño se traduce en resultados concretos para el planeta.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="font-serif text-5xl md:text-6xl font-light">
                {metric.value}
                <span className="text-2xl ml-1 text-primary-foreground/70">{metric.unit}</span>
              </div>
              <h3 className="font-mono text-sm uppercase tracking-wider">{metric.label}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
