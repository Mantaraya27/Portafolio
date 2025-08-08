"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Code, Zap, Palette, Globe, Database, Shield, Smartphone } from "lucide-react"

const skills = [
  {
    title: "React & Next.js",
    description: "Desarrollo de aplicaciones web modernas con componentes reutilizables y renderizado optimizado.",
    icon: Code,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    title: "TypeScript",
    description: "Código tipado y seguro que mejora la mantenibilidad y reduce errores en tiempo de desarrollo.",
    icon: Code,
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
    borderColor: "border-blue-600/20",
  },
  {
    title: "Performance First",
    description: "Optimización de Core Web Vitals, LCP, FCP y métricas de rendimiento para experiencias ultrarrápidas.",
    icon: Zap,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
  },
  {
    title: "UI/UX Design",
    description: "Interfaces intuitivas y accesibles que combinan estética moderna con funcionalidad excepcional.",
    icon: Palette,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    title: "Full-Stack Development",
    description: "Desarrollo completo desde frontend hasta backend con arquitecturas escalables y robustas.",
    icon: Globe,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
  {
    title: "Database & APIs",
    description: "Integración de bases de datos y APIs RESTful para aplicaciones dinámicas y escalables.",
    icon: Database,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
  {
    title: "Security Best Practices",
    description: "Implementación de medidas de seguridad modernas para proteger datos y usuarios.",
    icon: Shield,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
  },
  {
    title: "Mobile-First Design",
    description: "Diseño responsive que prioriza la experiencia móvil sin comprometer la funcionalidad desktop.",
    icon: Smartphone,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20",
  },
]

export default function SkillsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Crear array infinito duplicando las skills
  const infiniteSkills = [...skills, ...skills, ...skills]

  // Función para avanzar al siguiente slide
  const nextSlide = useCallback(() => {
    if (!isDragging) {
      setCurrentIndex((prev) => {
        const next = prev + 1
        // Reset al inicio cuando llegamos al final del primer set
        if (next >= skills.length) {
          return 0
        }
        return next
      })
    }
  }, [isDragging])

  // Función para retroceder al slide anterior
  const prevSlide = useCallback(() => {
    if (!isDragging) {
      setCurrentIndex((prev) => {
        const next = prev - 1
        // Ir al final cuando estamos al inicio
        if (next < 0) {
          return skills.length - 1
        }
        return next
      })
    }
  }, [isDragging])

  // Auto-play con pausa en hover
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return

    const interval = setInterval(() => {
      nextSlide()
    }, 3000) // Cambia cada 3 segundos

    return () => clearInterval(interval)
  }, [isAutoPlaying, isDragging, nextSlide])

  // Pausar auto-play en hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  // Navegación con teclado para accesibilidad
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        nextSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown, { passive: false })
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [prevSlide, nextSlide])

  // Calcular la posición del carrusel
  const carouselWidth = skills.length * 320 // Ancho aproximado de cada card
  const translateX = -currentIndex * 320

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mis{" "}
            <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologías y metodologías que utilizo para crear experiencias digitales excepcionales
          </p>
        </motion.div>

        {/* Contenedor del carrusel */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          role="region"
          aria-label="Carrusel de habilidades técnicas"
          tabIndex={0}
        >
          {/* Carrusel infinito */}
          <motion.div
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 relative"
            animate={{ x: translateX }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.6 
            }}
            drag="x"
            dragConstraints={{ left: -carouselWidth, right: 0 }}
            dragElastic={0.1}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(event, info) => {
              setIsDragging(false)
              const threshold = 100
              if (info.offset.x > threshold) {
                prevSlide()
              } else if (info.offset.x < -threshold) {
                nextSlide()
              }
            }}
            style={{ 
              width: `${infiniteSkills.length * 320}px`,
              position: 'relative'
            }}
          >
            {infiniteSkills.map((skill, index) => (
              <motion.div
                key={`${skill.title}-${index}`}
                className="min-w-[280px] sm:min-w-[320px] h-[380px] sm:h-[420px] p-6 sm:p-8 bg-background rounded-3xl shadow-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (index % skills.length) * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div>
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${skill.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon size={24} className={`${skill.color}`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border/20">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      Experiencia Avanzada
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${i < 4 ? skill.color.replace('text-', 'bg-') : 'bg-muted-foreground/20'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Indicadores de navegación */}
          <div className="flex justify-center mt-8 space-x-1.5 sm:space-x-2">
            {skills.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-110' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Ir a habilidad ${index + 1}`}
              />
            ))}
          </div>

          {/* Botones de navegación (solo en desktop) */}
          <div className="hidden lg:block">
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full shadow-lg border border-border/20 hover:bg-background transition-all duration-300 hover:scale-110"
              aria-label="Anterior habilidad"
            >
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full shadow-lg border border-border/20 hover:bg-background transition-all duration-300 hover:scale-110"
              aria-label="Siguiente habilidad"
            >
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Indicador de auto-play */}
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
            <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${isAutoPlaying ? 'bg-green-500' : 'bg-muted-foreground/30'}`} />
            <span>{isAutoPlaying ? 'Auto-play activo' : 'Auto-play pausado'}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
