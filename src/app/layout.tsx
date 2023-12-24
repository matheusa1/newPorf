import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Tela inicial do portfolio de Matheus Santos de Andrade',
}

const fira = Fira_Code({
  variable: '--fira-code-font',
  subsets: ['latin', 'cyrillic'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fira.className}>{children}</body>
    </html>
  )
}
