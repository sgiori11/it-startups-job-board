import styles from '../styles/Form.module.css';
import utilStyles from '../styles/utils.module.css';
import FormStepOne from '@/components/FormStepOne';

export default function Form() {
    return(
        <div className={styles.formContainer}>
            <h1 className={utilStyles.headingXl}>Post a Job on Startup Finder</h1>
            <p className={utilStyles.subheading}>Step 1: Create your listing preview</p>
            <div className={styles.progressBarContainer}>
                <div className={styles.progressBarOne}></div>
                <span className={styles.break}></span>
                <div className={styles.progressBarTwo}></div>
                <span className={styles.break}></span>
                <div className={styles.progressBarThree}></div>
            </div>
            <form>
              <FormStepOne />
            </form>
        </div>
    )
};