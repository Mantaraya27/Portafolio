import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "./components/Footer"
import ErrorBoundary from "./components/ErrorBoundary"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Lucas Sosa - Full Stack Developer",
  description: "Portfolio personal de Lucas Sosa, desarrollador Full Stack especializado en React, Next.js y tecnologías modernas.",
  keywords: "desarrollador full stack, react, next.js, typescript, portfolio, desarrollo web",
  authors: [{ name: "Lucas Sosa" }],
  creator: "Lucas Sosa",
  publisher: "Lucas Sosa",
  robots: "index, follow",
  openGraph: {
    title: "Lucas Sosa - Full Stack Developer",
    description: "Portfolio personal de Lucas Sosa, desarrollador Full Stack especializado en React, Next.js y tecnologías modernas.",
    type: "website",
    locale: "es_ES",
    siteName: "Lucas Sosa Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Sosa - Full Stack Developer",
    description: "Portfolio personal de Lucas Sosa, desarrollador Full Stack especializado en React, Next.js y tecnologías modernas.",
  },
  icons: {
    icon: "/logonav.ico",
    shortcut: "/logonav.ico",
  },
  manifest: '/site.webmanifest',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logonav.ico" />
        <link rel="shortcut icon" href="/logonav.ico" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ErrorBoundary>
            <main className="flex-1">{children}</main>
            <Footer />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}
