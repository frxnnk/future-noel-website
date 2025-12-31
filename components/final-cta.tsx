"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Calendar, Mail } from "lucide-react"

export function FinalCTA() {
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
    <section ref={sectionRef} id="contact" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute left-1/4 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.05] blur-3xl" />
        <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.03] blur-3xl" />

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl">
          {/* Main CTA card */}
          <div
            className={`
              relative rounded-3xl border border-card-border bg-card/50 backdrop-blur-sm p-12 md:p-16 text-center
              transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            {/* Gradient border effect */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-accent/10 opacity-50" />

            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  Let's Build Together
                </span>
              </div>

              <h2 className="mb-6 font-display text-4xl font-medium leading-tight text-foreground md:text-5xl lg:text-6xl">
                Ready to scale your
                <br />
                <span className="text-gradient-primary">infrastructure?</span>
              </h2>

              <p className="mx-auto mb-10 max-w-2xl text-lg text-foreground-secondary">
                Let's discuss how we can help you build infrastructure that
                supports your growth. No commitment, just a conversation about
                your needs.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="mailto:contact@futurenoel.com"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all duration-300 hover:bg-primary-hover hover:shadow-glow"
                >
                  <Calendar className="h-5 w-5" />
                  Schedule a call
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="mailto:contact@futurenoel.com"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-border bg-transparent px-8 py-4 text-base font-medium text-foreground transition-all duration-300 hover:border-border-hover hover:bg-background-elevated"
                >
                  <Mail className="h-5 w-5" />
                  Send an email
                </Link>
              </div>

              {/* Trust line */}
              <p className="mt-10 text-sm text-foreground-muted">
                Typically respond within 24 hours
              </p>
            </div>
          </div>

          {/* Bottom info cards */}
          <div className={`mt-8 grid gap-4 md:grid-cols-3 transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {[
              { title: "Free Consultation", desc: "30-minute discovery call" },
              { title: "Custom Proposal", desc: "Tailored to your needs" },
              { title: "Flexible Engagement", desc: "Project or retainer" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-card-border bg-card p-6 text-center"
              >
                <h4 className="font-medium text-foreground">{item.title}</h4>
                <p className="mt-1 text-sm text-foreground-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
