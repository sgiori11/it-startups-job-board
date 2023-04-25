import milan from '../../public/images/Milan.svg';
import Image from 'next/image';
import styles from '../styles/Footer.module.css'
import Link from 'next/link'


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>Built in Milan by 
                    <Link href="https://twitter.com/sgiori8" className={styles.Twitterlink}> Steph</Link>
                    <button className={styles.btn} onClick={() => window.location.href = `mailto:stephaniegiori9@gmail.com`}>Contact</button>
                </p>
            </div>
        </footer>
    )
};