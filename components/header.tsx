"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "About", href: "#about" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isScrolled
            ? "py-3 glass glass-border"
            : "py-6 bg-transparent"
          }
        `}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group relative flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
              <span className="font-display text-lg font-medium text-primary">FN</span>
            </div>
            <span className="font-display text-lg font-medium text-foreground">
              Future Noel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative px-4 py-2 text-sm text-foreground-secondary transition-colors duration-300 hover:text-foreground"
              >
                {item.name}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-primary scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-background-elevated px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background-elevated text-foreground transition-colors duration-300 hover:border-border-hover md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <div className="container flex h-full flex-col justify-center">
          <nav className="space-y-2">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
                  group flex items-center justify-between py-4 border-b border-border
                  transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
                `}
                style={{ transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : "0ms" }}
              >
                <span className="font-display text-3xl font-medium text-foreground md:text-4xl">
                  {item.name}
                </span>
                <ArrowUpRight className="h-6 w-6 text-foreground-muted transition-all duration-300 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div
            className={`
              mt-12 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
            style={{ transitionDelay: isMobileMenuOpen ? "400ms" : "0ms" }}
          >
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground transition-all duration-300 hover:bg-primary-hover"
            >
              Get in touch
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Contact info */}
          <div
            className={`
              mt-auto pb-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
            style={{ transitionDelay: isMobileMenuOpen ? "500ms" : "0ms" }}
          >
            <p className="text-sm text-foreground-muted">
              Ready to scale your infrastructure?
            </p>
            <a
              href="mailto:contact@futurenoel.com"
              className="mt-2 block text-foreground hover:text-primary transition-colors"
            >
              contact@futurenoel.com
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
