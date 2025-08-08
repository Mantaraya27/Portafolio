"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "@/hooks/use-toast"
import { Send, CheckCircle, AlertCircle, X } from "lucide-react"

const formSchema = z.object({
  name: z.string()
    .min(2, {
      message: "El nombre debe tener al menos 2 caracteres.",
    })
    .max(50, {
      message: "El nombre no puede exceder 50 caracteres.",
    })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
      message: "El nombre solo puede contener letras y espacios.",
    }),
  email: z.string()
    .email({
      message: "Por favor ingresa un email válido.",
    })
    .min(5, {
      message: "El email debe tener al menos 5 caracteres.",
    })
    .max(100, {
      message: "El email no puede exceder 100 caracteres.",
    }),
  subject: z.string()
    .min(3, {
      message: "El asunto debe tener al menos 3 caracteres.",
    })
    .max(100, {
      message: "El asunto no puede exceder 100 caracteres.",
    }),
  message: z.string()
    .min(10, {
      message: "El mensaje debe tener al menos 10 caracteres.",
    })
    .max(1000, {
      message: "El mensaje no puede exceder 1000 caracteres.",
    }),
})

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "Portafolioservice_bbnfp3"
const EMAILJS_TEMPLATE_ID = "template_45cbd1h"
const EMAILJS_PUBLIC_KEY = "JmT3zYakR7sixHf7c"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showValidationAlert, setShowValidationAlert] = useState(false)
  const [showSuccessAlert, setShowSuccessAlert] = useState(false)
  const [showErrorAlert, setShowErrorAlert] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = useCallback(async (values: z.infer<typeof formSchema>) => {
    if (!formRef.current) return

    // Validación adicional antes de enviar
    if (!values.name.trim() || !values.email.trim() || !values.subject.trim() || !values.message.trim()) {
      setShowValidationAlert(true)
      toast({
        title: "Campos incompletos",
        description: "Por favor completa todos los campos del formulario.",
        variant: "destructive",
        action: (
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-500" />
            <span className="text-red-600">Error</span>
          </div>
        ),
      })
      return
    }

    setIsSubmitting(true)
    setIsSuccess(false)
    setShowValidationAlert(false)

    try {
      // Inicializar EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY)

      // Enviar email usando EmailJS con parámetros específicos
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
        },
        EMAILJS_PUBLIC_KEY
      )

      if (result.status === 200) {
        setIsSuccess(true)
        setShowSuccessAlert(true)
        setShowErrorAlert(false)
        
        toast({
          title: "¡Mensaje enviado exitosamente!",
          description: "Gracias por contactarme. Te responderé en las próximas 24 horas.",
          action: (
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-green-600">Enviado</span>
            </div>
          ),
        })
        form.reset()
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setShowErrorAlert(true)
      setShowSuccessAlert(false)
      
      toast({
        title: "Error al enviar el mensaje",
        description: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo o contáctame directamente.",
        variant: "destructive",
        action: (
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-500" />
            <span className="text-red-600">Error</span>
          </div>
        ),
      })
    } finally {
      setIsSubmitting(false)
    }
  }, [form])

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-background grid place-items-center">
      <div className="w-full max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Trabajemos{" "}
            <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              juntos
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy aquí para ayudarte a hacer realidad tus ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start content-center">
          {/* Información de contacto */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Vamos a crear algo increíble juntos
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Ya sea que necesites un sitio web, una aplicación web o quieras discutir nuevas oportunidades, 
                estoy aquí para escuchar tu visión y ayudarte a llevarla al siguiente nivel.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">lucassosavega.ofi@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Ubicación</h4>
                  <p className="text-muted-foreground">Asunción, Paraguay</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Tiempo de respuesta</h4>
                  <p className="text-muted-foreground">Generalmente respondo en 24 horas</p>
                </div>
              </div>

              {/* Símbolo de protección */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Formulario Protegido</h4>
                  <p className="text-muted-foreground">Tus datos están seguros y protegidos</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            className="bg-background border border-border/20 rounded-2xl p-6 sm:p-8 shadow-lg w-full max-w-[95vw] lg:max-w-none mx-auto will-change-transform"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 100, damping: 15 }}
          >
            {/* Alertas */}
            {showValidationAlert && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                layout
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <span className="text-red-700 font-medium">
                      Por favor, completa todos los campos correctamente.
                    </span>
                  </div>
                  <button
                    onClick={() => setShowValidationAlert(false)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {showSuccessAlert && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                layout
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-green-700 font-medium">
                      ¡Mensaje enviado exitosamente! Te responderé en las próximas 24 horas.
                    </span>
                  </div>
                  <button
                    onClick={() => setShowSuccessAlert(false)}
                    className="text-green-500 hover:text-green-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {showErrorAlert && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                layout
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <span className="text-red-700 font-medium">
                      Error al enviar el mensaje. Por favor, inténtalo de nuevo.
                    </span>
                  </div>
                  <button
                    onClick={() => setShowErrorAlert(false)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Indicador de seguridad */}
            <div className="mb-6 p-4 bg-gray-900 border border-gray-700 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Formulario Seguro</h4>
                  <p className="text-sm text-gray-300">Tus datos están protegidos y se envían de forma segura</p>
                </div>
              </div>
            </div>

            <Form {...form}>
              <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 sm:space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground text-base sm:text-sm">
                        Nombre <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Tu nombre completo" 
                          {...field} 
                          className="bg-background border-border/20 focus:border-primary/50 h-12 text-base sm:text-sm"
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground text-base sm:text-sm">
                        Email <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="tu@email.com" 
                          {...field} 
                          className="bg-background border-border/20 focus:border-primary/50 h-12 text-base sm:text-sm"
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground text-base sm:text-sm">
                        Asunto <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="¿En qué puedo ayudarte?" 
                          {...field} 
                          className="bg-background border-border/20 focus:border-primary/50 h-12 text-base sm:text-sm"
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground text-base sm:text-sm">
                        Mensaje <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Cuéntame sobre tu proyecto..." 
                          className="min-h-[180px] sm:min-h-[120px] bg-background border-border/20 focus:border-primary/50 text-base sm:text-sm" 
                          {...field} 
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white disabled:opacity-50 disabled:cursor-not-allowed h-14 sm:h-12 text-base sm:text-sm" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Enviando mensaje...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Enviar Mensaje
                    </div>
                  )}
                </Button>

                {/* Información adicional */}
                <div className="text-center text-sm text-muted-foreground">
                  <p>Los campos marcados con * son obligatorios</p>
                  <p className="mt-1">Tiempo de respuesta: 24 horas</p>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
