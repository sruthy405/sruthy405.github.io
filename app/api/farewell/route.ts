import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { timestamp } = body

    console.log("[Farewell] User left the portfolio at:", new Date(timestamp).toISOString())

    // You can log analytics, send notifications, etc. here
    // Example: Track user sessions, send admin notification, etc.

    return NextResponse.json({ success: true, message: "Farewell tracked" }, { status: 200 })
  } catch (error) {
    console.error("Farewell tracking error:", error)
    return NextResponse.json({ error: "Failed to track farewell" }, { status: 500 })
  }
}
