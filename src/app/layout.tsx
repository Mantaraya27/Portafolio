import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "./components/Footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Lucas Sosa - Full Stack Developer",
  description: "Portfolio personal de Lucas Sosa, desarrollador Full Stack especializado en React, Next.js y tecnologías modernas.",
  icons: {
    icon: '/logonav.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
