import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['monospace'],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Lucas Dev - Portfolio",
  description: "Desarrollador full-stack que crea experiencias digitales elegantes que inspiran y elevan tu presencia en línea.",
  keywords: ["desarrollador", "full-stack", "portfolio", "web development", "React", "Next.js"],
  authors: [{ name: "Lucas Dev" }],
  creator: "Lucas Dev",
  openGraph: {
    title: "Lucas Dev - Portfolio",
    description: "Desarrollador full-stack que crea experiencias digitales elegantes",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Dev - Portfolio",
    description: "Desarrollador full-stack que crea experiencias digitales elegantes",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  // Optimizaciones para mejorar LCP
  other: {
    'theme-color': '#000000',
    'color-scheme': 'light dark',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
