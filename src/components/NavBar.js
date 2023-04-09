import { supabase } from '../lib/supabaseClient';
import { useState, useEffect } from 'react';
import { useUser } from '@supabase/auth-helpers-react'
import LoginPage from './LoginPage';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css'
import logo from '../../public/images/logo.svg'
import utilStyles from '../styles/utils.module.css'


export default function NavBar() {
  const user = useUser()
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleAuthStateChange = (event, session) => {
      if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
        setShowModal(false);
      }
    };

    const { data: authListener } = supabase.auth.onAuthStateChange(handleAuthStateChange);

    return () => {
      authListener.unsubscribe();
    };
  }, []);

    const handleLoginClick = () => {
          setShowModal(true);
        }

    return(
      <nav className={styles.nav}>
        <Link href="/">
          <Image 
            priority 
            className={styles.logo}
            src={logo}
            alt="logo"
          />
        </Link>
        <Link
          className={styles.navLink + ' ' + utilStyles.headingL}
          href="/about"
        >
          About
        </Link>
        <Link 
          className={styles.navLink + ' ' + utilStyles.headingL}
          href="/startups"
        >
          Startups
        </Link>
        {user ? (
          <Link 
            className={styles.navLink + ' ' + utilStyles.headingL + ' ' + styles.myProfile}
            href="/profile"
          >
            My profile
          </Link>
        ) : (
          <button 
            onClick={handleLoginClick}
            className={styles.loginBtn}
            >Log in
          </button>
        )}
        {showModal && (
          <LoginPage showModal={showModal} setShowModal={setShowModal} />
        )}
      </nav>
    );
  };
