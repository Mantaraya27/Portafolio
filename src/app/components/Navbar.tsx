"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon } from "lucide-react"

const navItems = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre mí", href: "#about" },
  { name: "Proyectos", href: "#projects" },
  { name: "Mis Habilidades", href: "#skills" },
  { name: "Trayectoria", href: "#experience" },
  { name: "Contacto", href: "#contact" },
]

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20)
    
    // Detectar sección activa
    const sections = navItems.map(item => item.href.replace("#", ""))
    const current = sections.find(section => {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      }
      return false
    })
    
    if (current) {
      setActiveSection(current)
    }
  }, [])

  const handleNavClick = useCallback((href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  useEffect(() => {
    setMounted(true)
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border/30" 
          : "bg-transparent border-b border-border/10"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Indicador sutil para móviles */}
      <motion.div 
        className="md:hidden absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0.8 : 0.3 }}
        transition={{ duration: 0.3 }}
      ></motion.div>
      
      {/* Línea sutil en la parte inferior */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/20 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0.6 : 0.2 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      ></motion.div>
      
      {/* Línea adicional sutil para desktop */}
      <motion.div 
        className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ 
          opacity: scrolled ? 0.4 : 0.1, 
          scaleX: scrolled ? 1 : 0.5 
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      ></motion.div>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="#home" className="flex items-center space-x-2">
              <img 
                src="/logonav.webp" 
                alt="Lucas Dev Logo" 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg"
                loading="eager"
                decoding="async"
                width="32"
                height="32"
              />
              <span className="text-lg sm:text-xl font-bold text-foreground hidden xs:block">
                Lucas Dev
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-6 lg:ml-10 flex items-baseline space-x-4 lg:space-x-8">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.replace("#", "")
                return (
                  <motion.button
                    key={item.name}
                    className={`relative transition-colors duration-200 font-medium text-sm lg:text-base group ${
                      isActive 
                        ? "text-foreground" 
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                    onClick={() => handleNavClick(item.href)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}></span>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center justify-center space-x-1 sm:space-x-2">
            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors relative flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Abrir menú"
              aria-expanded={isOpen}
            >
              {/* Indicador sutil del botón */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60"></div>
              {isOpen ? <X size={16} className="sm:w-4 sm:h-4" /> : <Menu size={16} className="sm:w-4 sm:h-4" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-3 sm:px-4 pt-3 sm:pt-4 pb-4 sm:pb-6 space-y-1 sm:space-y-2 bg-background/95 backdrop-blur-md border-t border-border/50 shadow-lg">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  className="block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 text-foreground/80 hover:text-foreground hover:bg-primary/10 rounded-lg transition-all duration-200 font-medium text-base sm:text-lg"
                  onClick={() => handleNavClick(item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
} 