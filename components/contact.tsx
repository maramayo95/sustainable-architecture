"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section id="contacto" className="py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl md:text-6xl font-light mb-6 text-balance">Iniciemos tu proyecto</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Contanos sobre tu proyecto y te enviaremos una propuesta de anteproyecto personalizada.
            </p>
            {/* <Button variant="outline" className="font-mono uppercase tracking-wider bg-transparent" asChild>
              <a href="/dossier.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Descargar dossier PDF
              </a>
            </Button> */}
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-sm p-8 md:p-12 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-mono text-xs uppercase tracking-wider">
                  Nombre completo *
                </Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="font-sans"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-mono text-xs uppercase tracking-wider">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="font-sans"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-mono text-xs uppercase tracking-wider">
                  Teléfono
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="font-sans"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectType" className="font-mono text-xs uppercase tracking-wider">
                  Tipo de obra *
                </Label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                >
                  <SelectTrigger id="projectType" className="font-sans">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vivienda-nueva">Vivienda nueva</SelectItem>
                    <SelectItem value="rehabilitacion">Rehabilitación</SelectItem>
                    <SelectItem value="ampliacion">Ampliación</SelectItem>
                    <SelectItem value="comercial">Comercial / Oficinas</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget" className="font-mono text-xs uppercase tracking-wider">
                Presupuesto estimado *
              </Label>
              <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                <SelectTrigger id="budget" className="font-sans">
                  <SelectValue placeholder="Seleccionar rango" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50-100k">USD 50,000 - 100,000</SelectItem>
                  <SelectItem value="100-200k">USD 100,000 - 200,000</SelectItem>
                  <SelectItem value="200-350k">USD 200,000 - 350,000</SelectItem>
                  <SelectItem value="350k+">USD 350,000+</SelectItem>
                  <SelectItem value="consultar">A consultar</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="font-mono text-xs uppercase tracking-wider">
                Contanos sobre tu proyecto *
              </Label>
              <Textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Ubicación, superficie aproximada, objetivos de sustentabilidad, plazos..."
                className="font-sans resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-mono uppercase tracking-wider border cursor-pointer"
            >
              Solicitar anteproyecto
            </Button>

            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              Al enviar este formulario aceptás nuestra política de privacidad. Te responderemos en un plazo de 48 horas
              hábiles.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
