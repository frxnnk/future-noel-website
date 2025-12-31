import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { TargetClients } from "@/components/target-clients"
import { TechStack } from "@/components/tech-stack"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <TargetClients />
        <TechStack />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
