"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GitBranch, Moon, Sun, Mail, Github, MessageCircle, Send, CheckCircle } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function ContactPage() {
  const { theme, setTheme } = useTheme()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
  }

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
            <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-sm text-foreground font-medium">
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
          We're Here to Help
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions or need assistance? Reach out anytime.
        </p>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-4 pb-16 w-full">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-6 bg-card border-border">
            <h2 className="text-xl font-bold mb-6">Send us a message</h2>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Message Sent!</h3>
                <p className="text-sm text-muted-foreground mb-4">We'll get back to you within 24 hours.</p>
                <Button variant="outline" size="sm" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message / Question
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you?"
                    required
                    rows={5}
                    className="bg-background border-border resize-none"
                  />
                </div>

                <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <h2 className="text-xl font-bold mb-6">Alternative Contact Methods</h2>

              <div className="space-y-4">
                <a
                  href="mailto:support@git-guard.com"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <p className="text-sm text-muted-foreground">support@git-guard.com</p>
                  </div>
                </a>

                <a
                  href="https://github.com/git-guard/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">GitHub Issues</p>
                    <p className="text-sm text-muted-foreground">Report bugs or request features</p>
                  </div>
                </a>

                <a
                  href="https://discord.gg/gitguard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Discord Community</p>
                    <p className="text-sm text-muted-foreground">Join our developer community</p>
                  </div>
                </a>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-border">
              <h3 className="font-bold mb-2">Quick Response Time</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We reply within 24 hours. Feature requests? Let us know — your feedback shapes Git-Guard.
              </p>
              <div className="text-xs text-muted-foreground">
                Average response time: <span className="text-primary font-medium">4 hours</span>
              </div>
            </Card>
          </div>
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
