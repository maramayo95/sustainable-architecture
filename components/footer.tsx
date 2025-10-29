import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-serif text-3xl font-light mb-4">TERRA</div>
            <p className="text-background/70 leading-relaxed mb-6">
              Estudio de arquitectura sostenible especializado en diseño bioclimático, eficiencia energética y
              construcción con materiales de bajo impacto.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hola@terrastudio.ar" className="hover:text-background/70 transition-colors">
                  hola@terrastudio.ar
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+5493515551234" className="hover:text-background/70 transition-colors">
                  +54 9 351 555 1234
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Córdoba, Argentina</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#manifiesto" className="hover:text-background/70 transition-colors">
                  Manifiesto
                </Link>
              </li>
              <li>
                <Link href="#proyectos" className="hover:text-background/70 transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="#proceso" className="hover:text-background/70 transition-colors">
                  Proceso
                </Link>
              </li>
              <li>
                <Link href="#materiales" className="hover:text-background/70 transition-colors">
                  Materiales
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-background/70 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacidad" className="hover:text-background/70 transition-colors">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="hover:text-background/70 transition-colors">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-background/70 transition-colors">
                  Política de cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
          <p className="font-mono">© {new Date().getFullYear()} Terra Estudio. Todos los derechos reservados.</p>
          <p className="font-mono text-xs">Matrícula CPAU 12345 · CABA 67890</p>
        </div>
      </div>
    </footer>
  )
}
