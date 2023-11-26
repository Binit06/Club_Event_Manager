import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/hooks/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import { Suspense } from 'react'
import Loading from '@/components/Loading'
import getEvents from '@/actions/getEvents'
import getUserById from '@/actions/getUserByUserId'
import getFormElements from '@/actions/getFormElements'
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Club Event Manager',
  description: 'Manage, Schedule, Get Reminder about any Events',
}

export const revalidate = 0
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSong = await getUserById();
  const formDetails = await getFormElements();
  console.log(formDetails)
  console.log(userSong)
  return (
    <html lang="en" className='bg-black'>
      <head>
        <Script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></Script>
      </head>
      <body className={inter.className + " scrollbar background"}>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
            <Navbar users={userSong}>
                {children}
            </Navbar>
          </UserProvider>
        </SupabaseProvider>
        {/* <Script src="assets/vendor/particles.min.js" strategy='beforeInteractive'/>
        <Script src="/assets/js/particle.js" /> */}
      </body>
    </html>
  )
}
