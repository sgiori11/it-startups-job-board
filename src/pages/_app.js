import '@/styles/globals.css';
import { Kodchasan, DM_Sans } from '@next/font/google'
import UserProvider from "../context/user";
import { Analytics } from '@vercel/analytics/react';

const kodchasan = Kodchasan({
  weight: ['500'],
  style: ['normal'],
  variable: '--font-kodchasan',
  subsets: ['latin'],
  display: 'swap',
})

const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps }) {

  return (
    <UserProvider session={pageProps.session}>
      <main className={kodchasan.variable + ' ' + dm_sans.variable}>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </UserProvider>
  )
};
