import { supabase } from '../lib/supabaseClient';
import { useState, useEffect } from 'react';
//import { useUser, useSession } from '@supabase/auth-helpers-react'
import LoginPage from './LoginPage';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css'
import logo from '../../public/images/logo.svg'
import utilStyles from '../styles/utils.module.css'
import { useUser } from "../context/user";


export default function NavBar() {
 // const user = useUser()
 // const [isLoggedIn, setIsLoggedIn] = useState(!!user);
  const [showModal, setShowModal] = useState(false);
  const { user } = useUser();


useEffect(() => {
    if (user) {
      setShowModal(false);
    }
  }, [user]);

    const handleLoginClick = () => {
       if (!user) {
          setShowModal(true);
        }
       };

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
            className={styles.navLink + ' ' + utilStyles.headingL + ' ' + styles.myAccount}
            href="/profile"
          >
            My Account
          </Link>
        ) : (
          <button 
            onClick={handleLoginClick}
            className={styles.loginBtn}
            >Log in
          </button>
        )}
        {!user && showModal && (
          <LoginPage showModal={showModal} setShowModal={setShowModal} />
        )}
      </nav>
    );
  };
