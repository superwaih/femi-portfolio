import type React from "react"
import type { Metadata } from "next"
import { Poppins, Sora } from "next/font/google"
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] })
const sora = Sora({ subsets: ["latin"], weight: ["400", "700"] })
export { sora }
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Oluwafemi Patrick - Community Growth Strategist",
  description:
    "Web3 Community Lead & Growth Manager specializing in blockchain communities, social media management, and content creation.",

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
  <body className={`font-sans ${poppins.className}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
       
      </body>
    </html>
  )
}
