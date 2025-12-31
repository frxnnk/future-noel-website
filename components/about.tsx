"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Linkedin, ArrowUpRight } from "lucide-react"

export function About() {
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
    <section ref={sectionRef} id="about" className="relative py-32 md:py-40 bg-background-elevated">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/[0.02] blur-3xl" />
      </div>

      <div className="container relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          {/* Left side - Content */}
          <div className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
                Leadership
              </span>
            </div>

            <h2 className="mb-8 font-display text-4xl font-medium leading-tight text-foreground md:text-5xl">
              Built by engineers,
              <br />
              <span className="text-gradient-primary">for engineers</span>
            </h2>

            <div className="space-y-6 text-foreground-secondary">
              <p className="text-lg leading-relaxed">
                Future Noel was founded with a clear mission: help ambitious teams
                build infrastructure that scales with their vision, not against it.
              </p>
              <p className="leading-relaxed">
                We've seen too many startups struggle with DevOps complexity when they
                should be focused on building their product. Our approach combines
                battle-tested practices with modern tooling to give you infrastructure
                that just works.
              </p>
            </div>

            {/* Values */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              {[
                { title: "Reliability First", desc: "Systems built to stay up" },
                { title: "Developer Experience", desc: "Tools your team will love" },
                { title: "Security by Default", desc: "Never an afterthought" },
                { title: "Transparent Pricing", desc: "No surprise invoices" },
              ].map((value, i) => (
                <div
                  key={i}
                  className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <h4 className="font-medium text-foreground">{value.title}</h4>
                  <p className="mt-1 text-sm text-foreground-muted">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Founder card */}
          <div className={`transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative rounded-2xl border border-card-border bg-card p-8 md:p-10">
              {/* Gradient accent */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />

              <div className="relative">
                {/* Avatar placeholder */}
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20">
                  <span className="font-display text-2xl font-medium text-foreground">MA</span>
                </div>

                <div className="mb-6">
                  <h3 className="font-display text-2xl font-medium text-foreground">
                    Melissa Gabriela Amaya
                  </h3>
                  <p className="mt-1 text-primary">Founder & CEO</p>
                </div>

                <p className="mb-8 leading-relaxed text-foreground-secondary">
                  With deep expertise in cloud architecture and DevOps practices,
                  Melissa leads Future Noel's mission to make enterprise-grade
                  infrastructure accessible to growing companies. Her hands-on
                  approach ensures every client gets solutions tailored to their
                  specific needs.
                </p>

                {/* Contact links */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:melissa@futurenoel.com"
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground-secondary transition-all duration-300 hover:border-border-hover hover:text-foreground"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground-secondary transition-all duration-300 hover:border-border-hover hover:text-foreground"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-primary/5 blur-2xl" />
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex items-center justify-between rounded-xl border border-border bg-background p-4">
              <div>
                <div className="text-2xl font-display font-medium text-foreground">50+</div>
                <div className="text-sm text-foreground-muted">Projects delivered</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="text-2xl font-display font-medium text-foreground">US & LATAM</div>
                <div className="text-sm text-foreground-muted">Service regions</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="text-2xl font-display font-medium text-foreground">5+ Years</div>
                <div className="text-sm text-foreground-muted">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
