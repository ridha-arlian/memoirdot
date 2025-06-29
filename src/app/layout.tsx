import type { Metadata } from 'next'
import { Geist, Geist_Mono, Gugi, Open_Sans, Roboto_Mono, Rubik } from 'next/font/google'
import { Provider } from '../components/ui/provider'
import { Toaster } from '../components/ui/toaster'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
  
});

const gugi = Gugi({
  variable: '--font-gugi',
  subsets: ['latin'],
  weight: '400'
})

const open = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Catardot',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${gugi.variable} ${open.variable} ${robotoMono.variable} ${rubik.variable}`} >
        <Provider>
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}