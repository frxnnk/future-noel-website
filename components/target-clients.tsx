"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, Rocket, Globe2, Users } from "lucide-react"

const clientTypes = [
  {
    icon: Rocket,
    title: "Startups",
    description: "Move fast without breaking things. We set up infrastructure that grows with you.",
  },
  {
    icon: Building2,
    title: "Scale-ups",
    description: "Ready to handle your next million users with architecture built for scale.",
  },
  {
    icon: Globe2,
    title: "SaaS Companies",
    description: "Multi-tenant, compliant, and globally distributed infrastructure.",
  },
  {
    icon: Users,
    title: "Tech Teams",
    description: "Augment your DevOps capabilities with expert guidance and implementation.",
  },
]

export function TargetClients() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute left-1/2 bottom-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container relative">
        {/* Header */}
        <div className={`mx-auto mb-20 max-w-3xl text-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background-elevated px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
              Who We Serve
            </span>
          </div>

          <h2 className="mb-6 font-display text-4xl font-medium leading-tight text-foreground md:text-5xl lg:text-6xl">
            Built for teams that
            <br />
            <span className="text-gradient-primary">ship fast</span>
          </h2>

          <p className="text-lg text-foreground-secondary md:text-xl">
            We work with ambitious companies across the US and Latin America who
            understand that great infrastructure is a competitive advantage.
          </p>
        </div>

        {/* Client types grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {clientTypes.map((client, index) => {
            const Icon = client.icon
            return (
              <div
                key={index}
                className={`
                  group relative rounded-2xl border border-card-border bg-card p-8
                  transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                  hover:border-border-hover hover:bg-card-hover
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Glow on hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="mb-3 font-display text-xl font-medium text-foreground">
                    {client.title}
                  </h3>

                  <p className="text-sm text-foreground-secondary leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-foreground-muted">
            Not sure if we're a fit?{" "}
            <a href="#contact" className="text-foreground hover:text-primary transition-colors link-underline">
              Let's talk
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
