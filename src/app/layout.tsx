import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Ashan Pathiranage - Site Reliability Engineer & DevOps Engineer',
  description: 'Site Reliability Engineer and DevOps Engineer with expertise in cloud infrastructure, automation, monitoring, and reliability engineering. Specializing in AWS, Kubernetes, and infrastructure as code.',
  keywords: ['SRE', 'Site Reliability Engineer', 'DevOps Engineer', 'AWS', 'Kubernetes', 'Infrastructure', 'Automation', 'Monitoring'],
  authors: [{ name: 'Ashan Pathiranage' }],
  creator: 'Ashan Pathiranage',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ashankaushanka96.github.io/ashans-portfolio',
    title: 'Ashan Pathiranage - Site Reliability Engineer & DevOps Engineer',
    description: 'Site Reliability Engineer and DevOps Engineer with expertise in cloud infrastructure, automation, monitoring, and reliability engineering.',
    siteName: 'Ashan Pathiranage Portfolio',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Ashan Pathiranage Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashan Pathiranage - Site Reliability Engineer & DevOps Engineer',
    description: 'Site Reliability Engineer and DevOps Engineer with expertise in cloud infrastructure, automation, monitoring, and reliability engineering.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          suppressHydrationWarning
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
