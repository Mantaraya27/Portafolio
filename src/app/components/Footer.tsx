"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Información personal */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Lucas Sosa
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Desarrollador web full-stack apasionado por crear experiencias digitales únicas. 
                Especializado en React, Next.js y tecnologías modernas para llevar tus ideas al siguiente nivel.
              </p>
              
              {/* Información de contacto */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">lucassosavega.ofi@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Asunción, Paraguay</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">+54 11 1234-5678</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-4">Enlaces</h4>
              <nav className="space-y-3">
                {[
                  { name: "Inicio", href: "#home" },
                  { name: "Proyectos", href: "#projects" },
                  { name: "Sobre mí", href: "#about" },
                  { name: "Contacto", href: "#contact" },
                ].map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Redes sociales */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-4">Sígueme</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/tu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/lucas-sosa-637584369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="mailto:lucassosavega.ofi@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="mt-12 pt-8 border-t border-border">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Lucas Sosa. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacidad
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Términos
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
