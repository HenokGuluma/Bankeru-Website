import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Inter } from "next/font/google"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Bankeru Games - Ethiopia's Premier Gaming Platform",
  description:
    "Join Ethiopia's best multiplayer gaming platform. Play Rapidball, Bankeru, Hacker, and Maze with amazing discounts and rewards.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${orbitron.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}
