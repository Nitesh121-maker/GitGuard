"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { GitBranch, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function PrivacyPage() {
  const { theme, setTheme } = useTheme()

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

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
        <Card className="p-8 bg-card border-border">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-sm dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-bold mb-3">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  <strong>Account Information:</strong> Email, GitHub username (if OAuth is used)
                </li>
                <li>
                  <strong>Repository Data:</strong> Repository URLs and code content submitted for analysis
                </li>
                <li>
                  <strong>Usage Data:</strong> Analytics about how you use our service (optional)
                </li>
                <li>
                  <strong>Payment Information:</strong> Processed securely through third-party providers
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">2. How We Use Your Data</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide and improve our conflict analysis service</li>
                <li>Process payments and manage subscriptions</li>
                <li>Send important service updates and notifications</li>
                <li>Analyze usage patterns to improve user experience</li>
                <li>Prevent abuse and maintain platform security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">3. Data Retention & Deletion</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your data only as long as necessary to provide our services. You can request complete account
                deletion at any time by contacting us. Upon deletion request, we will remove all personal data within 30
                days, except where retention is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">4. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">We use the following third-party services:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  <strong>Vercel:</strong> Hosting and deployment
                </li>
                <li>
                  <strong>Oracle Cloud:</strong> Additional infrastructure
                </li>
                <li>
                  <strong>Stripe/PayPal:</strong> Payment processing
                </li>
                <li>
                  <strong>GitHub:</strong> OAuth authentication
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">5. Security Measures</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>All data is encrypted in transit using TLS</li>
                <li>Database access is restricted and monitored</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>We never store your passwords (OAuth-based authentication)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">6. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use essential cookies to maintain your session and preferences. We do not use third-party tracking
                cookies. You can disable cookies in your browser settings, but this may affect service functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Access your personal data</li>
                <li>Request data correction or deletion</li>
                <li>Export your data in a portable format</li>
                <li>Opt out of marketing communications</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">8. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy-related inquiries, please contact our Data Protection Officer at{" "}
                <a href="mailto:privacy@git-guard.com" className="text-primary hover:underline">
                  privacy@git-guard.com
                </a>
                .
              </p>
            </section>
          </div>
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
            <Link href="/privacy" className="text-sm text-foreground font-medium">
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
