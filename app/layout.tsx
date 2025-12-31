import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Future Noel | DevOps & Cloud Infrastructure Solutions",
  description:
    "Enterprise-grade DevOps and cloud infrastructure solutions for ambitious startups. CI/CD automation, container orchestration, and AWS deployment services.",
  keywords: ["DevOps", "Cloud Infrastructure", "AWS", "Kubernetes", "CI/CD", "Docker", "Terraform"],
  authors: [{ name: "Future Noel" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://futurenoel.com",
    siteName: "Future Noel",
    title: "Future Noel | DevOps & Cloud Infrastructure Solutions",
    description: "Enterprise-grade DevOps and cloud infrastructure solutions for ambitious startups.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Noel | DevOps & Cloud Infrastructure Solutions",
    description: "Enterprise-grade DevOps and cloud infrastructure solutions for ambitious startups.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${GeistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
