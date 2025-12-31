"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Play } from "lucide-react"

const stats = [
  { value: "99.99%", label: "Uptime" },
  { value: "10x", label: "Faster deploys" },
  { value: "24/7", label: "Support" },
]

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-accent/[0.02] blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Top gradient fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      </div>

      <div className="container relative flex min-h-screen flex-col justify-center pb-20 pt-32 md:pt-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-8">
          {/* Main content */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div
              className={`
                mb-8 inline-flex items-center gap-3 rounded-full border border-border bg-background-elevated/50 px-4 py-2
                transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              `}
            >
              <span className="flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              <span className="text-sm text-foreground-secondary">
                Now accepting new clients for Q1 2025
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`
                mb-8 font-display text-5xl font-medium leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl
                transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
            >
              Infrastructure that{" "}
              <span className="relative">
                <span className="text-gradient-primary">scales</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5C47.6667 2.16667 141 -1.8 199 5.5"
                    stroke="url(#paint0_linear)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
                    style={{
                      strokeDasharray: 200,
                      strokeDashoffset: isVisible ? 0 : 200,
                      transition: "stroke-dashoffset 1s ease-out 0.7s",
                    }}
                  />
                  <defs>
                    <linearGradient id="paint0_linear" x1="1" y1="4" x2="199" y2="4">
                      <stop stopColor="#8b5cf6" />
                      <stop offset="1" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              with your ambition
            </h1>

            {/* Subheadline */}
            <p
              className={`
                mb-10 max-w-xl text-lg text-foreground-secondary md:text-xl
                transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
            >
              Enterprise-grade DevOps and cloud infrastructure solutions for
              startups ready to move fast without breaking things.
            </p>

            {/* CTA buttons */}
            <div
              className={`
                flex flex-col gap-4 sm:flex-row sm:items-center
                transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
            >
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all duration-300 hover:bg-primary-hover hover:shadow-glow"
              >
                Schedule a consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#services"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-8 py-4 text-base font-medium text-foreground transition-all duration-300 hover:border-border-hover hover:bg-background-elevated"
              >
                Explore services
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Stats */}
            <div
              className={`
                mt-16 flex gap-12 border-t border-border pt-8
                transition-all duration-1000 delay-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
            >
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="font-display text-3xl font-medium text-foreground md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-foreground-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual element */}
          <div className="hidden lg:col-span-5 lg:block">
            <div
              className={`
                relative aspect-square
                transition-all duration-1000 delay-400 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
              `}
            >
              {/* Abstract visual */}
              <div className="absolute inset-0 rounded-3xl border border-card-border bg-card/50 backdrop-blur-sm">
                {/* Terminal-like interface */}
                <div className="p-6">
                  {/* Window controls */}
                  <div className="flex gap-2 mb-6">
                    <div className="h-3 w-3 rounded-full bg-foreground/10" />
                    <div className="h-3 w-3 rounded-full bg-foreground/10" />
                    <div className="h-3 w-3 rounded-full bg-foreground/10" />
                  </div>

                  {/* Code lines */}
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-success">$</span>
                      <span className="text-foreground-secondary">deploy --env production</span>
                    </div>
                    <div className="text-foreground-muted">
                      <span className="text-primary">→</span> Building containers...
                    </div>
                    <div className="text-foreground-muted">
                      <span className="text-primary">→</span> Running health checks...
                    </div>
                    <div className="text-foreground-muted">
                      <span className="text-primary">→</span> Scaling replicas (3/3)...
                    </div>
                    <div className="flex items-center gap-2 text-success">
                      <span>✓</span>
                      <span>Deployed successfully in 47s</span>
                    </div>
                  </div>
                </div>

                {/* Metrics overlay */}
                <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-border bg-background-elevated/80 p-4 backdrop-blur-sm">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs text-foreground-muted">System Health</span>
                    <span className="flex items-center gap-1 text-xs text-success">
                      <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                      Operational
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <div className="text-lg font-medium text-foreground">99.99%</div>
                      <div className="text-xs text-foreground-muted">Uptime</div>
                    </div>
                    <div>
                      <div className="text-lg font-medium text-foreground">23ms</div>
                      <div className="text-xs text-foreground-muted">Latency</div>
                    </div>
                    <div>
                      <div className="text-lg font-medium text-foreground">2.4k</div>
                      <div className="text-xs text-foreground-muted">RPS</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -right-4 top-1/4 rounded-xl border border-border bg-card p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-success/10 flex items-center justify-center">
                    <Play className="h-4 w-4 text-success" fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-foreground">CI/CD</div>
                    <div className="text-xs text-foreground-muted">Pipeline passing</div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 bottom-1/3 rounded-xl border border-border bg-card p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-foreground">Security</div>
                    <div className="text-xs text-foreground-muted">All checks passed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`
          absolute bottom-8 left-1/2 -translate-x-1/2
          transition-all duration-1000 delay-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-foreground-muted">Scroll to explore</span>
          <div className="h-10 w-6 rounded-full border border-border p-1">
            <div className="h-2 w-1 mx-auto rounded-full bg-foreground-muted animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
