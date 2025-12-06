"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  GitBranch,
  Moon,
  Sun,
  Code,
  Zap,
  Terminal,
  Brain,
  Download,
  Clock,
  ShieldCheck,
  TrendingDown,
  ArrowRight,
} from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function FeaturesPage() {
  const { theme, setTheme } = useTheme()

  const steps = [
    {
      icon: Code,
      title: "Paste Your Code / Choose Your Branch",
      description: "Start by pasting your local code and selecting the target branch from your repo.",
    },
    {
      icon: GitBranch,
      title: "Automatic Repo Fetch",
      description: "Git-Guard fetches your repo and branch automatically — no setup required.",
    },
    {
      icon: Zap,
      title: "Conflict Analysis",
      description: "Our engine highlights merge conflicts, shows affected files, and explains differences.",
    },
    {
      icon: Terminal,
      title: "Terminal-Style Clean UI",
      description: "Developers love our terminal-style output — fast, clean, and precise.",
    },
    {
      icon: Brain,
      title: "AI Explanations (Coming Soon)",
      description: "Smart insights for each conflict to help you resolve it faster.",
    },
    {
      icon: Download,
      title: "Save & Export Reports",
      description: "Save your analysis for future reference or team collaboration.",
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: "Saves Hours",
      description: "Stop wasting time on manual merging and conflict resolution.",
    },
    {
      icon: ShieldCheck,
      title: "Prevents Failures",
      description: "Catch conflicts before they break your deployment pipeline.",
    },
    {
      icon: TrendingDown,
      title: "Reduces Errors",
      description: "Minimize frustration and human errors in the merge process.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground font-mono flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <GitBranch className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Git-Guard</h1>
              <p className="text-xs text-muted-foreground">Smart conflict prediction</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/features" className="text-sm text-foreground font-medium">
              Features
            </Link>
            <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 p-0"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Link href="/">
              <Button variant="outline" size="sm">
                Back to App
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          How Git-Guard Saves You Hours Every Day
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Preview, analyze, and understand merge conflicts — all in one place.
        </p>
      </section>

      {/* Steps Section */}
      <main className="flex-1 max-w-6xl mx-auto px-4 pb-16 w-full">
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-12">Step-by-Step Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-4">Why Developers Love It</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Git-Guard is built by developers, for developers. Here's why teams choose us.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-primary/5 to-transparent border-border text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Simplify Your Merges?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Start free and preview your conflicts today. No credit card required.
          </p>
          <Link href="/">
            <Button className="gap-2 bg-primary hover:bg-primary/90">
              Start Free & Preview Your Conflicts
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Git-Guard. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
