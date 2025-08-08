"use client"

import { useState, useRef, useCallback, useMemo } from "react"
import { motion, useScroll, useSpring, useInView, AnimatePresence } from "framer-motion"
import { Code, Zap, Palette, Database, Shield, Smartphone } from "lucide-react"

const timelineEvents = [
  {
    year: 2020,
    title: "Inicio en Desarrollo Web",
    description: "Comencé mi viaje en el desarrollo web con HTML, CSS y JavaScript.",
    details:
      "Mis primeros pasos en la programación web. Aprendí los fundamentos de HTML, CSS y JavaScript, creando sitios web estáticos y comprendiendo la estructura básica de la web.",
    icon: Code,
    technologies: ["HTML", "CSS", "JavaScript"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: 2021,
    title: "Especialización en React",
    description: "Me sumergí en el ecosistema React y desarrollo de aplicaciones modernas.",
    details:
      "Desarrollé aplicaciones web dinámicas con React, aprendiendo sobre componentes, hooks, estado y gestión de datos. Creé proyectos personales y colaboré en proyectos open source.",
    icon: Code,
    technologies: ["React", "Hooks", "Redux", "Material-UI"],
    color: "from-purple-500 to-pink-500",
  },
  {
    year: 2022,
    title: "Full-Stack Development",
    description: "Expandí mis habilidades hacia el desarrollo completo de aplicaciones.",
    details:
      "Aprendí Node.js, Express y MongoDB para crear aplicaciones full-stack. Desarrollé APIs RESTful, bases de datos y aplicaciones web completas con autenticación y autorización.",
    icon: Database,
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    color: "from-green-500 to-emerald-500",
  },
  {
    year: 2023,
    title: "Next.js y TypeScript",
    description: "Adopté Next.js y TypeScript para crear aplicaciones web de alto rendimiento.",
    details:
      "Me especialicé en Next.js para SSR, SSG y optimización de rendimiento. Implementé TypeScript para código más seguro y mantenible. Desarrollé aplicaciones escalables y optimizadas para SEO.",
    icon: Palette,
    technologies: ["Next.js", "TypeScript", "SSR", "SSG"],
    color: "from-orange-500 to-red-500",
  },
  {
    year: 2024,
    title: "Optimización y Performance",
    description: "Me enfoqué en optimización de Core Web Vitals y mejores prácticas.",
    details:
      "Especialización en optimización de rendimiento web, Core Web Vitals, LCP, FCP y métricas de rendimiento. Implementé mejores prácticas de SEO, accesibilidad y experiencia de usuario.",
    icon: Zap,
    technologies: ["Core Web Vitals", "SEO", "Accessibility", "UX"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    year: 2025,
    title: "Aprendizaje Continuo",
    description: "Sigo explorando nuevas tecnologías y mejorando mis habilidades.",
    details:
      "Mantengo un enfoque de aprendizaje constante, explorando nuevas tecnologías emergentes y metodologías de desarrollo. Me esfuerzo por mantenerme actualizado con las mejores prácticas y tendencias del desarrollo web moderno.",
    icon: Shield,
    technologies: ["Nuevas Tecnologías", "Mejores Prácticas", "Innovación", "Crecimiento"],
    color: "from-indigo-500 to-purple-500",
  },
]

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const handleToggleEvent = useCallback((index: number) => {
    setExpandedEvent(expandedEvent === index ? null : index)
  }, [expandedEvent])

  const timelineEventsMemo = useMemo(() => timelineEvents, [])

  return (
    <section ref={containerRef} className="py-16 sm:py-20 bg-background relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mi{" "}
            <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Trayectoria
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Evolución de mi carrera en desarrollo web y tecnologías modernas
          </p>
        </motion.div>

        <div className="relative">
          {/* Línea vertical central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
          
          {/* Línea de progreso */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
            style={{ scaleY: scaleX, transformOrigin: "top" }}
          />

          {timelineEventsMemo.map((event, index) => (
            <TimelineEvent
              key={event.year}
              event={event}
              index={index}
              isExpanded={expandedEvent === index}
              onToggle={() => handleToggleEvent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
}: {
  event: (typeof timelineEvents)[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      className={`relative mb-24 sm:mb-16 last:mb-0 ${
        index % 2 === 0 ? "flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Punto del timeline */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10 -top-6 flex justify-center">
        <motion.div
          className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${event.color} rounded-full shadow-lg border-4 border-background`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <event.icon className="w-6 h-6 text-white" />
        </motion.div>
      </div>

      {/* Tarjeta del evento */}
      <div className={`flex items-center flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
        <motion.div
          className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div 
            className="p-6 bg-background rounded-xl shadow-lg border border-border/20 hover:border-primary/30 transition-all duration-300 hover:shadow-xl cursor-pointer"
            onClick={onToggle}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-primary text-lg">{event.year}</span>
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${event.color}`} />
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              {event.title}
            </h3>
            
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {event.description}
            </p>

            {/* Tecnologías */}
            <div className="flex flex-wrap gap-2 mb-4">
              {event.technologies.slice(0, 3).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
              {event.technologies.length > 3 && (
                <span className="px-3 py-1 bg-muted-foreground/20 text-muted-foreground text-sm rounded-full">
                  +{event.technologies.length - 3}
                </span>
              )}
            </div>

            {/* Detalles expandibles */}
            <AnimatePresence mode="wait">
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-border/20">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {event.details}
                    </p>
                    
                    {/* Tecnologías completas */}
                    <div className="flex flex-wrap gap-2">
                      {event.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Indicador de expandir */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/20">
              <span className="text-sm text-muted-foreground">
                {isExpanded ? "Cerrar" : "Ver más"}
              </span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="w-4 h-4"
              >
                <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}