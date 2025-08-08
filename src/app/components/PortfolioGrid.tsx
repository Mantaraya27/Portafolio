"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Zap } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Plataforma completa de comercio electrónico con Next.js, TypeScript y Stripe. Optimizada para rendimiento con SSR y ISR.",
    category: "Full-Stack",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    imageUrl: "/projects/ecommerce.svg",
    githubUrl: "https://github.com/lucas-dev/ecommerce-platform",
    featured: true,
    status: "En Proceso",
  },
  {
    id: 2,
    title: "Sistema de Gestión de Reportes Conductuales Académicos",
    description: "Aplicación web para gestión de documentos y reportes conductuales utilizada en el Colegio Técnico Nacional de Asunción. Sistema integral para el seguimiento académico y conductual de estudiantes.",
    category: "Python",
    technologies: ["Python", "Flask", "HTML", "CSS", "SQLite"],
    imageUrl: "/projects/image.webp",
    githubUrl: "https://github.com/Mantaraya27/Proyecto-Institucional-de-Gestion.git",
    featured: true,
    status: "Completado",
  },
]

const categories = ["All", "Full-Stack", "Python"]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="py-16 sm:py-20 bg-background overflow-hidden">
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
              Proyectos
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Una colección de aplicaciones web modernas y soluciones digitales innovadoras
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de Proyectos */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.id}-${filter}`}
              className={`group relative bg-background rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 ease-in-out border-2 border-transparent hover:border-primary/20 ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
              whileHover={{ y: -8, scale: 1.02 }}
            >
                {/* Imagen del Proyecto */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Imagen del proyecto */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 flex items-center justify-center">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Overlay con información */}
                  <motion.div
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="text-center p-4">
                      <p className="text-white text-sm sm:text-base leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 justify-center mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-muted-foreground/20 text-muted-foreground text-xs rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* Badge de Featured */}
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full">
                        Destacado
                      </span>
                    </div>
                  )}
                  
                  {/* Badge de Estado */}
                  {project.status && (
                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-1 text-white text-xs font-medium rounded-full ${
                        project.status === "En Proceso" 
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500" 
                          : "bg-gradient-to-r from-green-500 to-emerald-500"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  )}
                </div>

                {/* Contenido del Proyecto */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      <span className="text-xs text-muted-foreground">Optimizado</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Enlaces */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors text-sm"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-muted-foreground mb-4">
            ¿Interesado en trabajar juntos en tu próximo proyecto?
          </p>
          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contactar
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
