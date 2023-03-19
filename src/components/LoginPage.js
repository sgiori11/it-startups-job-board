import { Auth } from '@supabase/auth-ui-react'
import { supabase } from '../lib/supabaseClient';
import { useUser } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
import styles from '../styles/LoginScreen.module.css'

const LoginPage = ({ showModal, setShowModal }) => {
  const supabaseClient = supabase
  const user = useUser()
  const [data, setData] = useState()

  function closeModal() {
    setShowModal(false)
  };

  //useEffect(() => {
    //async function loadData() {
     // const { data } = await supabaseClient.from('test').select('*')
     // setData(data)}

    // Only run query once user is logged in.
    //if (user) loadData()
  //}, [user])

  if (!user)
    return (
    <div className={showModal ? styles.loginOverlay : styles.closeModal}>
      <div className={styles.loginContainer}>
        <button className={styles.dismissButton}
                onClick={closeModal}
        >
          <svg width="23" height="25" viewBox="0 0 29 31" fill="white" xmlns="http://www.w3.org/2000/svg">
          <rect width="31" height="31" fill="white"/>
          <line x1="2.74125" y1="4" x2="26" y2="27.2587" stroke="black" stroke-width="3.87671" stroke-linecap="round"/>
          <line x1="2.32593" y1="27.2588" x2="25.5847" y2="4" stroke="black" stroke-width="3.87671" stroke-linecap="round"/>
          </svg>
        </button>
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
    <p>congrats, you're logged in!</p>
  )
}

export default LoginPage;