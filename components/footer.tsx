import Link from "next/link"
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react"

const navigation = {
  services: [
    { name: "Cloud Infrastructure", href: "#services" },
    { name: "CI/CD Automation", href: "#services" },
    { name: "Container Orchestration", href: "#services" },
    { name: "DevOps Consulting", href: "#services" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

const social = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "GitHub", icon: Github, href: "https://github.com" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      {/* Main footer content */}
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                <span className="font-display text-lg font-medium text-primary">FN</span>
              </div>
              <span className="font-display text-lg font-medium text-foreground">
                Future Noel
              </span>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-relaxed text-foreground-secondary">
              Enterprise-grade DevOps and cloud infrastructure solutions for
              ambitious companies ready to scale.
            </p>

            {/* Social links */}
            <div className="mt-8 flex gap-3">
              {social.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background-elevated text-foreground-muted transition-all duration-300 hover:border-border-hover hover:text-foreground"
                    aria-label={item.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation columns */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            {/* Services */}
            <div>
              <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-foreground">
                Services
              </h4>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-1 text-sm text-foreground-secondary transition-colors duration-300 hover:text-foreground"
                    >
                      {item.name}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-foreground">
                Company
              </h4>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-1 text-sm text-foreground-secondary transition-colors duration-300 hover:text-foreground"
                    >
                      {item.name}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-foreground">
                Get in Touch
              </h4>
              <div className="space-y-3 text-sm text-foreground-secondary">
                <a
                  href="mailto:contact@futurenoel.com"
                  className="block transition-colors duration-300 hover:text-foreground"
                >
                  contact@futurenoel.com
                </a>
                <p>Operating in US & Latin America</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-sm text-foreground-muted">
            &copy; {new Date().getFullYear()} Future Noel LLC. All rights reserved.
          </p>

          <div className="flex gap-6">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-foreground-muted transition-colors duration-300 hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </footer>
  )
}
