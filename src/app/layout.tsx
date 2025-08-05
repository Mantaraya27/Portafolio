import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "./components/Footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Minimal Creative Agency",
  description: "Apple-inspired design portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
                    <html lang="en" suppressHydrationWarning>
                  <body className={`${inter.className} min-h-screen bg-background text-foreground overflow-x-hidden`}>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                      <main className="overflow-x-hidden">{children}</main>
                      <Footer />
                    </ThemeProvider>
                  </body>
                </html>
  )
}
