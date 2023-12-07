import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Recruitery',
  description: 'Recruitery is an all-in-one hiring solution that streamlines the process of finding, hiring, and paying local talent in compliance with regulations. With the mission to help people enhance their income by connecting skilled talents with full-time employers or project-based clients seeking their expertise. Focused on mid-to-high level positions, Recruitery offers a range of services including job postings and access to a vast talent pool. Companies can collaborate with experienced headhunters who possess extensive networks of potential candidates, ensuring efficient talent identification and attraction. The Recruitery platform also provides a global payroll solution equipped with a comprehensive suite of payroll management features such as automated tax calculation, payment processing, and reporting.  ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
