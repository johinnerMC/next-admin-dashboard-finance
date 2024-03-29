import { Karla } from 'next/font/google'


import { SideBar, TopMenu } from '@/components/ui';
import { PageWrapper } from '@/components/ui/atomic';

import { ThemeProvider } from '@/config/theme-provider';
import { Metadata } from 'next';




const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ['latin'],
  variable: "--font-karla"
})
export const metadata: Metadata = {
  title: "Dz admin dashboard",
  description: "NextJs admin dashboard created by Sijin Raj"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={karla.className + ' h-screen overflow-hidden'}>
        <ThemeProvider
          themes={['dark', 'custom', 'light']}
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          <>
            <SideBar />
            <div className="flex flex-col h-full w-full">
              <TopMenu />
              <PageWrapper children={children} />
            </div>
          </>
        </ThemeProvider>
      </body>
    </html>
  )
}
