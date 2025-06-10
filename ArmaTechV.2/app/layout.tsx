import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ArmaTech App',
  description: 'Created with ArmaTech',
  generator: 'ArmaTech.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
