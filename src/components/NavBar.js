import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css'
import logo from '../../public/images/logo.svg'
import utilStyles from '../styles/utils.module.css'


export default function NavBar() {
  
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
           href="/pages/about">About</Link>
           <Link 
           className={styles.navLink + ' ' + utilStyles.headingL}
           href="/pages/startups">Startups</Link>
        </nav>
    );
};
