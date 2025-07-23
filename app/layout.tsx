import type React from "react"
import type { Metadata } from "next"
import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css"

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Arnav Sharma - Full Stack Developer & MERN Stack Expert",
  description:
    "Computer Science student specializing in MERN stack, Java, and Cloud Computing. Building scalable web applications with modern technologies.",
  keywords: "Full Stack Developer, MERN Stack, Java, Cloud Computing, Web Development, React, Node.js",
  authors: [{ name: "Arnav Sharma" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" async></script>
      </body>
    </html>
  )
}
