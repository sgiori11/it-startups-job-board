import '@/styles/globals.css';
import UserProvider from "../context/user";
import { Analytics } from '@vercel/analytics/react';


export default function App({ Component, pageProps }) {

  return (
    <UserProvider session={pageProps.session}>
      <Component {...pageProps} />
      <Analytics />
    </UserProvider>
  )
};
