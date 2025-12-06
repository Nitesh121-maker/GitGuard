import { type NextRequest, NextResponse } from "next/server"

const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET
const GITHUB_REDIRECT_URI = process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get("code")

  if (!code) {
    // Redirect to GitHub login
    const params = new URLSearchParams({
      client_id: GITHUB_CLIENT_ID || "",
      redirect_uri: GITHUB_REDIRECT_URI || "",
      scope: "repo read:user",
      state: Math.random().toString(36).substring(7),
    })
    return NextResponse.redirect(`https://github.com/login/oauth/authorize?${params}`)
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
        code,
        redirect_uri: GITHUB_REDIRECT_URI,
      }),
    })

    const tokenData = await tokenResponse.json()

    if (tokenData.error) {
      return NextResponse.json({ error: tokenData.error }, { status: 400 })
    }

    const accessToken = tokenData.access_token

    // Get user info
    const userResponse = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    const userData = await userResponse.json()

    // Create response and set cookie with token
    const response = NextResponse.redirect(new URL("/", request.url))
    response.cookies.set("github_token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    })
    response.cookies.set("github_user", JSON.stringify(userData), {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
    })

    return response
  } catch (error) {
    console.error("GitHub OAuth error:", error)
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 })
  }
}
