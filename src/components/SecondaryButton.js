import styles from '../styles/SecondaryButton.module.css';
import Link from 'next/link';

export default function SecondaryButton({ text }) {
    return(
        <Link className={styles.button} href="/form" >
            {text}
        </Link>
    );
};