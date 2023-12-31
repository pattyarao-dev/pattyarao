import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'


const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Patty Arao&apos;s Website</title>
      <body className={font.className}>
        {children}</body>
    </html>
  )
}
