import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Sombras do Oriente - Transforme Suas Memórias em Perfumes Únicos',
  description: 'Maison de perfumaria de nicho que oferece experiências olfativas personalizadas. Transforme suas memórias em fragrâncias exclusivas com nosso perfumista especializado.',
  keywords: 'perfume personalizado, fragrância exclusiva, perfumaria de nicho, experiência olfativa, perfume sob medida',
  authors: [{ name: 'Sombras do Oriente' }],
  openGraph: {
    type: 'website',
    title: 'Sombras do Oriente - Transforme Suas Memórias em Perfumes Únicos',
    description: 'Maison de perfumaria de nicho que oferece experiências olfativas personalizadas.',
    siteName: 'Sombras do Oriente',
  },
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
  themeColor: '#A87C40',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}