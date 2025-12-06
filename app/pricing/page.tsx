"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { GitBranch, Moon, Sun, Check, HelpCircle } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PricingPage() {
  const [isIndia, setIsIndia] = useState(true)
  const { theme, setTheme } = useTheme()

  const plans = [
    {
      name: "Free",
      priceIndia: "₹0",
      priceGlobal: "$0",
      period: "",
      description: "Get started with basic features",
      features: [
        "Compare branches & pasted code",
        "Terminal analysis",
        "5 checks/day",
        "Basic conflict detection",
        "Community support",
      ],
      cta: "Start Free",
      popular: false,
      gradient: "from-gray-500 to-gray-600",
    },
    {
      name: "Pro",
      priceIndia: "₹199",
      priceGlobal: "$9",
      period: "/month",
      description: "For individual developers",
      features: [
        "Unlimited checks",
        "AI conflict explanation",
        "AI merge suggestions",
        "10 AI credits/day",
        "Priority support",
        "Advanced analytics",
      ],
      cta: "Upgrade Now",
      popular: true,
      gradient: "from-primary to-primary/60",
    },
    {
      name: "Team",
      priceIndia: "₹699",
      priceGlobal: "$19",
      period: "/user/month",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Team dashboard",
        "Slack/email notifications",
        "Org-level GitHub integration",
        "Role-based access",
        "Dedicated support",
      ],
      cta: "Upgrade Now",
      popular: false,
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  const faqs = [
    {
      question: "Can I upgrade/downgrade anytime?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
    },
    {
      question: "How do AI credits work?",
      answer:
        "AI credits are used for advanced conflict explanations and merge suggestions. Pro users get 10 credits/day, Team users get unlimited credits.",
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes, we offer a 14-day money-back guarantee if you're not satisfied with our service.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards, PayPal, and UPI (for Indian users).",
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
            <Link href="/features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-sm text-foreground font-medium">
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
          Simple Pricing. No Surprises.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Pay only for what you need. Free plan to get started.
        </p>

        {/* Region Toggle */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className={`text-sm ${!isIndia ? "text-foreground font-medium" : "text-muted-foreground"}`}>
            Global (USD)
          </span>
          <button
            onClick={() => setIsIndia(!isIndia)}
            className={`w-14 h-7 rounded-full p-1 transition-colors ${isIndia ? "bg-primary" : "bg-muted"}`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transition-transform ${
                isIndia ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`text-sm ${isIndia ? "text-foreground font-medium" : "text-muted-foreground"}`}>
            India (INR)
          </span>
        </div>
      </section>

      {/* Pricing Cards */}
      <main className="flex-1 max-w-6xl mx-auto px-4 pb-16 w-full">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative p-6 bg-card border-border ${
                plan.popular ? "border-primary border-2 shadow-lg shadow-primary/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text">
                    {isIndia ? plan.priceIndia : plan.priceGlobal}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground">
            Cancel anytime • No hidden fees • Indian & international pricing available
          </p>
        </div>

        {/* FAQ Section */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-primary" />
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-4">
                <AccordionTrigger className="text-sm font-medium hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
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
