"use client"

import { motion } from "framer-motion"
import { Code, Zap, Palette, Globe, Heart, Award } from "lucide-react"

export default function AboutMe() {
  const skills = [
    { name: "React & Next.js", icon: Code, color: "text-blue-500" },
    { name: "TypeScript", icon: Code, color: "text-blue-600" },
    { name: "Performance", icon: Zap, color: "text-yellow-500" },
    { name: "UI/UX Design", icon: Palette, color: "text-purple-500" },
    { name: "Full-Stack", icon: Globe, color: "text-green-500" },
    { name: "Clean Code", icon: Heart, color: "text-red-500" },
  ]



  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contenido Principal */}
          <motion.div
            className="order-1 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Award size={14} className="sm:w-4 sm:h-4" />
              Desarrollador Full-Stack
            </motion.div>

            {/* Título */}
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Sobre{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Mí
              </span>
            </motion.h2>

            {/* Descripción */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Soy un desarrollador apasionado por crear experiencias digitales que{" "}
              <span className="text-foreground font-semibold">inspiran</span> y{" "}
              <span className="text-foreground font-semibold">transforman</span>. Mi enfoque combina{" "}
              <span className="text-foreground font-semibold">innovación técnica</span> con{" "}
              <span className="text-foreground font-semibold">diseño centrado en el usuario</span>.
            </motion.p>

            {/* Filosofía de Desarrollo */}
            <motion.div
              className="mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                Mi Filosofía
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-muted-foreground">
                    <span className="text-foreground font-semibold">Performance First:</span> Optimizo cada línea de código para velocidad y eficiencia.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-muted-foreground">
                    <span className="text-foreground font-semibold">UX Centrado:</span> Cada decisión de diseño mejora la experiencia del usuario.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-muted-foreground">
                    <span className="text-foreground font-semibold">Código Limpio:</span> Mantengo estándares de calidad y legibilidad en todo momento.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Metodología de Trabajo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                Metodología de Trabajo
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1">
                      Análisis y Planificación
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Entiendo tus necesidades, objetivos y público objetivo para crear la estrategia perfecta.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1">
                      Diseño y Desarrollo
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Creo interfaces modernas y funcionales con las mejores prácticas de desarrollo.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1">
                      Optimización y Entrega
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Optimizo el rendimiento y entrego un producto final pulido y listo para producción.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Elemento Visual - Grid de Skills */}
          <motion.div
            className="order-2 lg:order-2 flex justify-center lg:justify-end lg:items-center h-full"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="relative max-w-sm lg:max-w-md">
              {/* Fondo con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl" />
              
              {/* Grid de Skills */}
              <div className="relative bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-sm border border-border/50">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="group relative bg-gradient-to-br from-background/80 to-background/60 rounded-xl p-3 sm:p-4 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex flex-col items-center text-center space-y-2">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center ${skill.color}`}>
                          <skill.icon size={20} className="sm:w-5 sm:h-5" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      
                      {/* Efecto hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </div>
                
                {/* Elementos decorativos flotantes */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-500/60 rounded-full"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500/60 rounded-full"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.div
                  className="absolute top-1/2 -right-1 w-2 h-2 bg-green-500/60 rounded-full"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
