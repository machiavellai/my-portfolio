import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Oghene Victor - Portfolio',
  description: 'Personal portfolio of Oghene Victor, a Digital Solution Innovator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#000c66] text-white`}>
        <div className="fixed inset-0 z-[-2] w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute min-w-full min-h-full object-cover"
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3129576-sd_960_540_30fps-llLF1EjsXZhUnm3evJyjosb0lSvVnL.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundColor: "rgba(0, 12, 102, 0.8)"
          }}
        ></div>
        <div className="relative z-10">
          <Navbar />
          <main>
            {children}
          </main>
          <footer className="bg-[#050a30] text-white p-4 mt-8">
            <div className="container mx-auto text-center">
              <p>&copy; 2023 Oghene Victor. All rights reserved.</p>
            </div>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  )
}

