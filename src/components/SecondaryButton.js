import styles from '../styles/SecondaryButton.module.css';
import Button from './Button'

export default function SecondaryButton({ text, onClick }) {

    return(
        <Button className={styles.button} onClick={onClick} >
            {text}
        </Button>
    );
};