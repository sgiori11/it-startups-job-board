import Image from 'next/image';
import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
   
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                  <p>Built in Milano by 
                     <Link href="https://sgiori.xyz" className={styles.Twitterlink}> Steph</Link>
                  </p>
                  <Link className={styles.privacy} href="/privacy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>
                </div>
             </div>
        </footer>
    )
};

