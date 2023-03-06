import { supabase } from '../lib/supabaseClient';
import { Auth } from '@supabase/auth-ui-react';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
       <Component {...pageProps} />
       <Auth supabaseClient={supabase} appearance={{ theme: 'light' }} />
    </div>
)};
