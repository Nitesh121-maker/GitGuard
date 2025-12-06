"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Coffee, GitBranch, Moon, Sun, Github, Twitter, Heart, AlertCircle,  ChevronDown,LogOut,QrCode,SprayCan as Paypal } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import Image from "next/image"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"

interface GitHubUser {
  login: string
  avatar_url: string
  name: string
}
export default function GitConflictAnalyzer() {
  const [localChanges, setLocalChanges] = useState("")
  const [targetBranch, setTargetBranch] = useState("main")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repositories, setRepositories] = useState([])

  const handleAnalyze = async () => {
    if (!localChanges.trim()) return

    setIsAnalyzing(true)
    setResults(null) // Clear previous results

    // Simulate API call for 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Demo result content
    setResults(`// --- DEMO ANALYSIS RESULT ---
    // Analysis for your changes against branch: ${targetBranch}
    // This is a simulated result to demonstrate functionality.

    ✅ No conflicts detected in:
      - src/components/Header.tsx (lines 1-45)
      - src/utils/helpers.js (lines 12-28)

    ⚠️  Potential conflicts found:
      - src/App.tsx (lines 23-31)
        Reason: Both branches modify the same function signature.
        Consider reviewing changes in this file carefully.
        
      - package.json (line 15)
        Reason: Dependency version mismatch detected.
        Your branch: "react": "^18.2.0"
        Target branch: "react": "^18.3.0"
        
    🔍 Recommendations:
      1. Review 'src/App.tsx' changes before merging.
      2. Coordinate 'package.json' updates with your team to resolve dependency conflicts.
      3. Consider rebasing your feature branch onto '${targetBranch}' to resolve conflicts early.

    Confidence Score: 92% (Simulated)`)

    setIsAnalyzing(false)
  }

  const handleBuyMeCoffee = () => {
    // Open Buy Me a Coffee link in new tab
    window.open("https://buymeacoffee.com/developer", "_blank") // Replace with your actual link
  }
 
  const handleLogout = () => {
    document.cookie = "github_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    document.cookie = "github_user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    setIsLoggedIn(false)
    setUser(null)
    setRepositories([])
  }
  // Handle Paypal
  const handlePayPal = () => {
    window.open("https://paypal.me/yourpaypalid", "_blank")
  }

  // Github auth
  const handleGitHubLogin = () => {
    window.location.href = "/auth/login"
  }
  
  const upiLink =
  "upi://pay?pa=yourvpa@bank&pn=Smart%20Git%20Analyzer%20Support&am=100&cu=INR&tn=Support%20for%20Smart%20Git%20Analyzer"
   const upiQrCodeUrl = `/placeholder.svg?height=200&width=200&query=UPI QR code for ${encodeURIComponent(upiLink)}`
   
  const UpiDialogContent = () => (
    <>
      <DialogHeader>
        <DialogTitle>Support via UPI</DialogTitle>
        <DialogDescription>Scan the QR code below with any UPI app to support this project.</DialogDescription>
      </DialogHeader>
      <div className="flex flex-col items-center justify-center p-4">
        <Image
          src={upiQrCodeUrl || "/placeholder.svg"}
          alt="UPI QR Code"
          width={200}
          height={200}
          className="rounded-lg border border-border p-2 bg-white"
        />
        <p className="mt-4 text-sm text-muted-foreground text-center">
          Scan this QR code using your preferred UPI app (e.g., Google Pay, PhonePe, Paytm, BHIM).
        </p>
      </div>
    </>
  )

  return (
    <div className="min-h-screen bg-background text-foreground font-mono flex flex-col">
      {/* Header */}
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
              <span className="sr-only">Toggle theme</span>
            </Button>

            {isLoggedIn && user ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10">
                  <img src={user.avatar_url || "/placeholder.svg"} alt={user.login} className="w-5 h-5 rounded-full" />
                  <span className="text-sm font-medium">{user.login}</span>
                </div>
                <Button variant="ghost" size="sm" onClick={handleLogout} className="gap-2">
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                onClick={handleGitHubLogin}
                variant="outline"
                size="sm"
                className="gap-2 bg-[#1f6feb] hover:bg-[#388bfd] text-white border-0"
              >
                <Github className="w-4 h-4" />
                Login with GitHub
              </Button>
            )}

            {/* Header Support Dropdown */}
            <Dialog>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Support Us <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-card border-border text-foreground">
                  <DropdownMenuItem onClick={handleBuyMeCoffee} className="cursor-pointer">
                    <Coffee className="mr-2 h-4 w-4" /> Buy Me a Coffee
                  </DropdownMenuItem>
                  <DialogTrigger asChild>
                    <DropdownMenuItem className="cursor-pointer">
                      <QrCode className="mr-2 h-4 w-4" /> Support via UPI
                    </DropdownMenuItem>
                  </DialogTrigger>
                  <DropdownMenuItem onClick={handlePayPal} className="cursor-pointer">
                    <Paypal className="mr-2 h-4 w-4" /> Support via PayPal
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DialogContent className="sm:max-w-[425px] bg-card text-foreground border-border">
                <UpiDialogContent />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-glow bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Smart Git Conflict Pre-Analyzer
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Predict potential Git merge conflicts before they happen. Save time, reduce frustration, and merge with
          confidence.
        </p>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto px-4 pb-12">
      {!isLoggedIn && (
          <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900 p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-1">GitHub Login Required</h3>
                <p className="text-sm text-amber-800 dark:text-amber-200 mb-3">
                  Sign in with GitHub to access your repositories and unlock advanced features like repository selection
                  and branch analysis.
                </p>
                <Button
                  onClick={handleGitHubLogin}
                  className="gap-2 bg-[#1f6feb] hover:bg-[#388bfd] text-white text-sm"
                >
                  <Github className="w-4 h-4" />
                  Login with GitHub
                </Button>
              </div>
            </div>
          </Card>
        )}
        {/* Form Section */}
        <div className="space-y-6 mb-8">
          <div>
            <label htmlFor="changes" className="block text-sm font-medium mb-3 text-foreground">
              Your Local Changes (Paste Git Diff or File Content)
            </label>
            <Textarea
              id="changes"
              value={localChanges}
              onChange={(e) => setLocalChanges(e.target.value)}
              placeholder="diff --git a/src/App.tsx b/src/App.tsx
index 1234567..abcdefg 100644
--- a/src/App.tsx
+++ b/src/App.tsx
@@ -10,7 +10,7 @@ function App() {
   return (
     <div className='App'>
-      <h1>Hello World</h1>
+      <h1>Hello Universe</h1>
     </div>
   );"
              className="min-h-[200px] bg-card border-border text-foreground font-mono text-sm resize-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 shadow-sm"
              rows={10}
            />
          </div>

          <div>
            <label htmlFor="branch" className="block text-sm font-medium mb-3 text-foreground">
              Target Branch
            </label>
            <div className="relative">
              <GitBranch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="branch"
                value={targetBranch}
                onChange={(e) => setTargetBranch(e.target.value)}
                className="pl-10 bg-card border-border text-foreground font-mono focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 shadow-sm"
              />
            </div>
          </div>

          <Button
            onClick={handleAnalyze}
            disabled={!localChanges.trim() || isAnalyzing}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-mono font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl neon-border"
          >
            {isAnalyzing ? (
              <div className="flex items-center gap-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                  <div
                    className="w-2 h-2 bg-current rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-current rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
                Analyzing Potential Conflicts
              </div>
            ) : (
              "Analyze Potential Conflicts"
            )}
          </Button>
        </div>

        {/* Results Section */}
        {results && (
          <Card className="bg-card border-border p-6 terminal-glow shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-sm text-muted-foreground">conflict-analyzer-terminal</span>
            </div>
            <pre className="text-sm leading-relaxed whitespace-pre-wrap font-mono overflow-x-auto">
              <code className="text-foreground">{results}</code>
            </pre>
          </Card>
        )}

        {!results && !isAnalyzing && (
          <Card className="bg-card border-border border-dashed p-8 text-center shadow-sm">
            <div className="text-muted-foreground font-mono">AI will highlight potential merge conflicts here.</div>
          </Card>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 backdrop-blur-sm mt-auto">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GitBranch className="w-5 h-5 text-primary" />
                <span className="font-bold">Git Conflict Analyzer</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Smart conflict prediction tool for developers. Analyze potential merge conflicts before they happen.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Real-time conflict detection</li>
                <li>• Multi-branch analysis</li>
                <li>• Detailed recommendations</li>
                <li>• Developer-friendly interface</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="flex flex-col gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleBuyMeCoffee}
                  className="justify-start gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white border-0"
                >
                  <Coffee className="w-4 h-4" />
                  Buy Me a Coffee
                </Button>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                    <Twitter className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Git Conflict Analyzer. Made with <Heart className="w-4 h-4 inline text-red-500" /> for developers.
            </p>
            <p className="text-sm text-muted-foreground">Open source • Privacy focused • Developer first</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
