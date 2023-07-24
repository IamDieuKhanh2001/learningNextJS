import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter, Roboto, Poppins } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from "../context/ThemeContext"
import { Providers } from './GlobalRedux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextJSコース',
  description: 'start learning next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        suppressHydrationWarning={true}
      >
        <Providers>
          <ThemeProvider>
            <div className='container'>
              <Navbar />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
