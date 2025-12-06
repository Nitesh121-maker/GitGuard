"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Github, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function GitHubLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Redirect to GitHub OAuth
    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
    const redirectUri = `${window.location.origin}/api/auth/github`
    const params = new URLSearchParams({
      client_id: clientId || "",
      redirect_uri: redirectUri,
      scope: "repo read:user",
      state: Math.random().toString(36).substring(7),
    })
    window.location.href = `https://github.com/login/oauth/authorize?${params}`
  }

  const handleGithubDirectClick = () => {
    setIsLoading(true)
    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
    const redirectUri = `${window.location.origin}/api/auth/github`
    const params = new URLSearchParams({
      client_id: clientId || "",
      redirect_uri: redirectUri,
      scope: "repo read:user",
      state: Math.random().toString(36).substring(7),
    })
    window.location.href = `https://github.com/login/oauth/authorize?${params}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80 flex flex-col items-center justify-center px-4">
      <Link href="/" className="mb-8 hover:opacity-80 transition-opacity">
        <div className="text-sm text-muted-foreground hover:text-foreground">← Back to Analyzer</div>
      </Link>

      <Card className="w-full max-w-md bg-card border-border shadow-xl">
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
              <Github className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Sign in to GitHub</h1>
            <p className="text-sm text-muted-foreground">to continue to Git Conflict Analyzer</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSignIn} className="space-y-4 mb-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Username or email address
              </label>
              <Input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-background border-border text-foreground font-mono focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-background border-border text-foreground font-mono focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                disabled={isLoading}
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading || !email || !password}
              className="w-full h-10 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
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
              ) : (
                <>
                  Sign in <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-2 bg-card text-muted-foreground">Or</span>
            </div>
          </div>

          {/* OAuth Button */}
          <Button
            onClick={handleGithubDirectClick}
            disabled={isLoading}
            variant="outline"
            className="w-full h-10 border-border bg-background hover:bg-accent text-foreground font-medium transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Github className="w-4 h-4" />
            Sign in with GitHub
          </Button>

          {/* Forgot Password Link */}
          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-primary hover:underline transition-colors">
              Forgot your password?
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border px-8 py-4 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            New to GitHub?{" "}
            <a
              href="https://github.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Create an account
            </a>
          </p>
        </div>
      </Card>

      {/* Security Note */}
      <div className="mt-8 text-center text-xs text-muted-foreground max-w-md">
        <p>🔒 Your credentials are secure. This app only accesses your public repositories.</p>
      </div>
    </div>
  )
}
