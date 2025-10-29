import type React from "react"
import type { Metadata } from "next"
import { Inter, Cormorant_Garamond, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
})
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Estudio de Arquitectura Sostenible | Diseño Bioclimático y Casa Pasiva",
  description:
    "Espacios con baja huella y alto impacto humano. Especialistas en arquitectura sostenible, diseño bioclimático y casas pasivas. Solicita tu anteproyecto.",
  keywords: [
    "arquitectura sostenible",
    "casa pasiva",
    "diseño bioclimático",
    "construcción sostenible",
    "eficiencia energética",
  ],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${cormorant.variable} ${jetbrains.variable} antialiased`}>{children}</body>
    </html>
  )
}
