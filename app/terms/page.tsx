"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { GitBranch, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function TermsPage() {
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
          <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-sm dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-bold mb-3">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using Git-Guard, you agree to these terms. If you do not agree to these terms, please do not use our
                service. We reserve the right to update these terms at any time, and continued use of the service
                constitutes acceptance of updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">2. Services Provided</h2>
              <p className="text-muted-foreground leading-relaxed">
                Git-Guard provides Git merge conflict analysis and prediction tools. We offer both free and paid plans
                with varying features and usage limits. The service is provided "as-is" and we make no guarantees about
                accuracy of conflict predictions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">3. User Responsibilities</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Use the service for lawful purposes only</li>
                <li>Do not attempt to abuse, hack, or disrupt the service</li>
                <li>Respect intellectual property rights of others</li>
                <li>Keep your account credentials secure</li>
                <li>Do not share account access with unauthorized users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">4. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Paid subscriptions are billed monthly or annually. Refunds are available within 14 days of purchase.
                Cancellation takes effect at the end of the current billing period. We accept major credit cards,
                PayPal, and UPI (for Indian users).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">5. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Git-Guard is provided as-is. We are not responsible for code errors, conflicts, or any damages arising
                from use of our service. Our maximum liability is limited to the amount paid for the service in the
                preceding 12 months.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">6. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate accounts for abuse, violation of terms, or any other reason
                at our sole discretion. Users may cancel their accounts at any time through the account settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">7. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these terms, please contact us at{" "}
                <a href="mailto:legal@git-guard.com" className="text-primary hover:underline">
                  legal@git-guard.com
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
            <Link href="/terms" className="text-sm text-foreground font-medium">
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
