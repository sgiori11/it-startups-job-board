import Button from './Button'
import styles from '../styles/SecondaryButton.module.css'

export default function SecondaryButton({ text, onClick }) {
    return(
        <Button className={styles.button} onClick={onClick} text={text} />

    );
};