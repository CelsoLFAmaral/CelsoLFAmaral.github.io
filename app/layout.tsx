import type { Metadata } from 'next'
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Celso Luiz Ferraz do Amaral — Desenvolvedor Full Stack',
  description:
    'Desenvolvedor full stack com mais de 7 anos de experiência em React, Node.js, PHP, WordPress e MySQL.',
  keywords: ['front-end', 'desenvolvedor', 'HTML', 'CSS', 'Javascript', 'PHP', 'WordPress'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body suppressHydrationWarning className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable} font-sans bg-bg text-text-primary antialiased`}>
        {children}
      </body>
    </html>
  )
}
