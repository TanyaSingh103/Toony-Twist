import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { ThemeProvider } from '@/components/theme-provider'

const archivo = Archivo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cartoon TV',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <div className="outline-border dark:outline-darkBorder grid h-[800px] max-h-[100dvh] w-full grid-cols-[100px_auto_100px] rounded-base shadow-[10px_10px_0_0_#000] outline outline-4 w600:grid-cols-[70px_auto_70px] w500:grid-cols-1 portrait:h-[100dvh]">
            
            <header className="border-r-border dark:border-r-darkBorder flex items-center justify-center rounded-l-base border-r-4 bg-main w500:hidden portrait:rounded-none">
              <h1 className="-rotate-90 whitespace-nowrap text-[40px] font-bold tracking-[4px] smallHeight:text-[30px] smallHeight:tracking-[2px] w600:text-[30px] w600:tracking-[2px]">
                <span className="text-text inline-block">TOONY TWIST</span>
              </h1>
            </header>
            
            <main className="dark:bg-darkBg flex h-[800px] max-h-[100dvh] flex-col rounded-br-base rounded-tr-base bg-bg font-semibold portrait:h-[100dvh] portrait:max-h-[100dvh] portrait:rounded-none">
              <Nav />
              <div className="main h-full max-h-[750px] overflow-y-auto portrait:max-h-[calc(100dvh-50px)]">
                {children}
              </div>
            </main>

            <header className="border-l-border dark:border-l-darkBorder flex flex-col items-center justify-center rounded-r-base border-l-4 bg-main w500:hidden portrait:rounded-none">
            <div className="flex flex-col">
              <div className="w-8 h-8 bg-black rounded-full border-8 border-red-500 mb-10"></div>
              <div className="w-8 h-8 bg-black rounded-full border-8 border-yellow-500 mb-10"></div>
              <div className="w-8 h-8 bg-black rounded-full border-8 border-blue-500 mb-10"></div>
              <div className="w-8 h-8 bg-black rounded-full border-8 border-green-500 mb-10"></div>
            </div>

            </header>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
