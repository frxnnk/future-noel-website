"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Cloud Infrastructure",
    description:
      "Design, deploy, and manage scalable cloud environments. We architect solutions that grow with your business while optimizing costs.",
    highlights: ["Multi-cloud strategy", "Infrastructure as Code", "Cost optimization", "Auto-scaling"],
    href: "#contact",
  },
  {
    number: "02",
    title: "CI/CD Automation",
    description:
      "Transform your deployment workflow. From code commit to production in minutes with automated testing, security scanning, and zero-downtime releases.",
    highlights: ["Pipeline design", "Automated testing", "Security gates", "Release management"],
    href: "#contact",
  },
  {
    number: "03",
    title: "Container Orchestration",
    description:
      "Modernize your applications with containerization. We implement and manage Kubernetes clusters that handle your workloads at any scale.",
    highlights: ["Kubernetes management", "Service mesh", "Microservices", "Docker optimization"],
    href: "#contact",
  },
  {
    number: "04",
    title: "DevOps Consulting",
    description:
      "Strategic guidance for your engineering transformation. We assess, plan, and implement DevOps practices tailored to your team's maturity.",
    highlights: ["Team enablement", "Process design", "Tool selection", "Culture transformation"],
    href: "#contact",
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative
        transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
    >
      {/* Service card */}
      <a
        href={service.href}
        className="block relative overflow-hidden rounded-2xl border border-card-border bg-card p-8 md:p-10 transition-all duration-500 hover:border-border-hover hover:bg-card-hover"
      >
        {/* Number watermark */}
        <span className="absolute -right-4 -top-8 font-display text-[12rem] font-medium leading-none text-foreground/[0.02] transition-all duration-500 group-hover:text-foreground/[0.04] group-hover:-right-2">
          {service.number}
        </span>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-8 flex items-start justify-between">
            <div>
              <span className="mb-3 block font-mono text-xs text-primary">
                {service.number}
              </span>
              <h3 className="font-display text-2xl font-medium text-foreground md:text-3xl">
                {service.title}
              </h3>
            </div>

            {/* Arrow icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background transition-all duration-300 group-hover:border-primary group-hover:bg-primary">
              <ArrowUpRight className="h-5 w-5 text-foreground-muted transition-all duration-300 group-hover:text-primary-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          {/* Description */}
          <p className="mb-8 text-foreground-secondary leading-relaxed">
            {service.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-3">
            {service.highlights.map((highlight, i) => (
              <span
                key={i}
                className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground-muted transition-colors duration-300 group-hover:border-border-hover group-hover:text-foreground-secondary"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom line accent */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
      </a>
    </div>
  )
}

export function Services() {
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
    <section ref={sectionRef} id="services" className="relative py-32 md:py-40">
      <div className="container">
        {/* Section header */}
        <div className="mb-20 grid gap-8 md:grid-cols-2 md:items-end md:gap-16">
          <div className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background-elevated px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
                Services
              </span>
            </div>

            <h2 className="font-display text-4xl font-medium leading-tight text-foreground md:text-5xl lg:text-6xl">
              What we <span className="text-gradient-primary">deliver</span>
            </h2>
          </div>

          <div className={`transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-lg text-foreground-secondary md:text-xl">
              End-to-end DevOps solutions that accelerate your development velocity
              while maintaining the highest standards of reliability and security.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
