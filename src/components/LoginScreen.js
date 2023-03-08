import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../lib/supabaseClient';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
import styles from '../styles/LoginScreen.module.css'

const LoginPage = () => {
  const supabaseClient = supabase
  const user = useUser()
  const [data, setData] = useState()

  //useEffect(() => {
    //async function loadData() {
     // const { data } = await supabaseClient.from('test').select('*')
     // setData(data)}

    // Only run query once user is logged in.
    //if (user) loadData()
  //}, [user])

  if (!user)
    return (
    <div className={styles.loginOverlay}>
      <div className={styles.loginContainer}>
        <p>Log in to post a job on Startup Finder!</p>
        <Auth
        redirectTo="http://localhost:3000/"
        appearance={{
          className: {
            anchor: styles.anchor,
            button: styles.button,
            container: styles.container,
            divider: styles.divider,
            label: styles.label,
            input: styles.input,
            //..
           },
          }}
          localization={{
            variables: {
              sign_in: {
                email_label: 'Email address',
                password_label: 'Password',
              },
            },
          }}
          supabaseClient={supabaseClient}
          providers={['google', 'apple']}
        />
      </div>
    </div>
    )

  return (
    <>
      <button onClick={() => supabaseClient.auth.signOut()}>Sign out</button>
      <p>user:</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <p>client-side data fetching with RLS</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default LoginPage