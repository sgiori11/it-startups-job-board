import Image from 'next/image';
import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
   
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>Built in Milan by 
                    <Link href="https://twitter.com/sgiori8" className={styles.Twitterlink}> Steph</Link>
                </p>
                <Link className={styles.privacy} href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>
            </div>
        </footer>
    )
};

