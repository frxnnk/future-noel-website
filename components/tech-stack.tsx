"use client"

import { useEffect, useRef, useState } from "react"
import { Cloud, Container, GitBranch, Shield, Zap, BarChart3 } from "lucide-react"

const capabilities = [
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Architecture",
    metric: "99.99%",
    metricLabel: "Uptime SLA",
    description: "AWS, GCP, Azure multi-cloud deployments with enterprise-grade reliability",
    tags: ["AWS", "GCP", "Azure", "Terraform"],
    size: "large",
  },
  {
    id: "cicd",
    icon: GitBranch,
    title: "CI/CD Pipelines",
    metric: "10x",
    metricLabel: "Faster Deploys",
    description: "Automated workflows from commit to production",
    tags: ["GitHub Actions", "Jenkins", "ArgoCD"],
    size: "medium",
  },
  {
    id: "containers",
    icon: Container,
    title: "Container Orchestration",
    metric: "500+",
    metricLabel: "Services Managed",
    description: "Kubernetes at scale with zero-downtime deployments",
    tags: ["Docker", "Kubernetes", "Helm"],
    size: "medium",
  },
  {
    id: "security",
    icon: Shield,
    title: "Security & Compliance",
    metric: "SOC2",
    metricLabel: "Compliant",
    description: "Infrastructure hardening and continuous security monitoring",
    tags: ["IAM", "Vault", "SIEM"],
    size: "small",
  },
  {
    id: "performance",
    icon: Zap,
    title: "Performance",
    metric: "<50ms",
    metricLabel: "P99 Latency",
    description: "Optimized for speed at global scale",
    tags: ["CDN", "Caching", "Edge"],
    size: "small",
  },
  {
    id: "observability",
    icon: BarChart3,
    title: "Observability",
    metric: "360°",
    metricLabel: "Visibility",
    description: "Full-stack monitoring, logging, and tracing",
    tags: ["Datadog", "Grafana", "PagerDuty"],
    size: "small",
  },
]

function CapabilityCard({ capability, index }: { capability: typeof capabilities[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  const Icon = capability.icon
  const isLarge = capability.size === "large"
  const isMedium = capability.size === "medium"

  return (
    <div
      ref={cardRef}
      className={`
        group relative overflow-hidden rounded-2xl border border-card-border bg-card
        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:border-border-hover hover:bg-card-hover
        ${isLarge ? "md:col-span-2 md:row-span-2" : ""}
        ${isMedium ? "md:row-span-2" : ""}
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Glow effect */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-accent/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className={`relative z-10 flex h-full flex-col justify-between ${isLarge ? "p-8 md:p-10" : "p-6 md:p-8"}`}>
        {/* Header */}
        <div>
          <div className="mb-6 flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
              <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
            </div>

            {/* Metric badge */}
            <div className="text-right">
              <div className={`font-display font-medium text-foreground ${isLarge ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"}`}>
                {capability.metric}
              </div>
              <div className="text-xs uppercase tracking-wider text-foreground-muted">
                {capability.metricLabel}
              </div>
            </div>
          </div>

          <h3 className={`mb-3 font-display font-medium text-foreground ${isLarge ? "text-2xl md:text-3xl" : "text-xl"}`}>
            {capability.title}
          </h3>

          <p className={`text-foreground-secondary leading-relaxed ${isLarge ? "text-base md:text-lg" : "text-sm"}`}>
            {capability.description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {capability.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-background-elevated px-3 py-1 text-xs text-foreground-muted transition-colors duration-300 hover:border-border-hover hover:text-foreground-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 h-24 w-24 translate-x-8 translate-y-8 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/10" />
    </div>
  )
}

export function TechStack() {
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
    <section ref={sectionRef} id="capabilities" className="relative py-32 md:py-40">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container relative">
        {/* Section header */}
        <div className={`mb-20 max-w-3xl transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background-elevated px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
              Capabilities
            </span>
          </div>

          <h2 className="mb-6 font-display text-4xl font-medium leading-tight text-foreground md:text-5xl lg:text-6xl">
            Infrastructure that scales
            <span className="text-gradient-primary"> with you</span>
          </h2>

          <p className="text-lg text-foreground-secondary md:text-xl">
            Enterprise-grade DevOps solutions built on battle-tested technologies.
            We architect systems designed for reliability, performance, and growth.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {capabilities.map((capability, index) => (
            <CapabilityCard key={capability.id} capability={capability} index={index} />
          ))}
        </div>

        {/* Bottom stat bar */}
        <div className={`mt-16 grid grid-cols-2 gap-8 border-t border-border pt-16 md:grid-cols-4 transition-all duration-1000 delay-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {[
            { value: "150+", label: "Deployments per week" },
            { value: "3M+", label: "Requests handled daily" },
            { value: "24/7", label: "Monitoring & support" },
            { value: "Zero", label: "Downtime migrations" },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
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
    </section>
  )
}
