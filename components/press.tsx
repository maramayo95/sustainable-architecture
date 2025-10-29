const awards = [
  { name: "Premio Arquitectura Sustentable", year: "2024", org: "FADEA" },
  { name: "Certificación LEED Gold", year: "2023", org: "USGBC" },
  { name: "Passivhaus Designer", year: "2022", org: "PHI" },
]

const press = [
  { outlet: "Clarín Arquitectura", title: "La nueva generación de casas pasivas en Argentina" },
  { outlet: "Revista Plot", title: "Materialidad consciente: adobe y madera en la arquitectura contemporánea" },
  { outlet: "Summa+", title: "Estudio Terra: diseño bioclimático con identidad local" },
]

export function Press() {
  return (
    <section id="prensa" className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-6 text-balance">Reconocimientos</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Awards */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-8">
              Premios y certificaciones
            </h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div key={index} className="border-l-2 border-primary pl-6 py-2">
                  <div className="font-serif text-xl mb-1">{award.name}</div>
                  <div className="font-mono text-sm text-muted-foreground">
                    {award.org} · {award.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Press */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-8">Prensa</h3>
            <div className="space-y-6">
              {press.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="font-mono text-xs uppercase tracking-wider text-primary">{item.outlet}</div>
                  <div className="text-lg leading-relaxed">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logos */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
            {["LEED", "Passivhaus", "FADEA", "EDGE", "FSC"].map((logo) => (
              <div key={logo} className="font-mono text-2xl font-bold tracking-wider">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
