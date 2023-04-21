//import { createBrowserSupabaseClient, Session } from '@supabase/auth-helpers-nextjs';
//import { SessionContextProvider } from '@supabase/auth-helpers-react';
//import { useState } from 'react';
import '@/styles/globals.css';
import UserProvider from "../context/user";


export default function App({ Component, pageProps }) {
// Create a new supabase browser client on every first render.
 // const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
    <UserProvider session={pageProps.session}>
      <Component {...pageProps} />
    </UserProvider>
    //<SessionContextProvider
     //supabaseClient={supabaseClient}
    // initialSession={pageProps.initialSession}
   // >
    //  <Component {...pageProps} />
   // </SessionContextProvider>
  )
};
