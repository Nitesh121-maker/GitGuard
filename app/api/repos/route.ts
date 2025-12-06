import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const token = request.cookies.get("github_token")?.value

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const reposResponse = await fetch("https://api.github.com/user/repos?per_page=100&sort=updated", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    })

    if (!reposResponse.ok) {
      return NextResponse.json({ error: "Failed to fetch repos" }, { status: reposResponse.status })
    }

    const repos = await reposResponse.json()
    return NextResponse.json(repos)
  } catch (error) {
    console.error("Error fetching repos:", error)
    return NextResponse.json({ error: "Failed to fetch repositories" }, { status: 500 })
  }
}
