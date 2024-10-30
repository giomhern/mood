import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { inter } from "@/utils/fonts"

export const metadata = {
  title: "mood",
  description: "Created by Gio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
