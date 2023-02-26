import { useState } from 'react';
import styles from '../styles/Form.module.css';
import utilStyles from '../styles/utils.module.css';
import FormStepOne from '@/components/FormStepOne';
import FormStepTwo from '@/components/FormStepTwo';
import Layout from '@/components/Layout';

export default function Form() {
    const [stepOneComplete, setStepOneComplete] = useState(false);

    const handleClick = () => {
        setStepOneComplete(!stepOneComplete);
    };
    
    return(
    <div className={styles.formBody}>
      <Layout>
        <div className={styles.formContainer}>
            <h1 className={utilStyles.headingXl}>Post a Job on Startup Finder</h1>
            <p className={utilStyles.subheading}>Step 1: Create your listing preview</p>
            <div className={styles.progressBarContainer}>
                <div className={
                        stepOneComplete
                          ? styles.progressBarOne + ' ' + styles.stepComplete
                          : styles.progressBarOne
                      }
                ></div>
                <span className={
                        stepOneComplete
                          ? styles.breakComplete
                          : styles.break
                      }
                ></span>
                <div className={styles.progressBarTwo}></div>
                <span className={styles.break}></span>
                <div className={styles.progressBarThree}></div>
            </div>
            <form>
              <FormStepOne handleClick={handleClick} stepOneComplete={stepOneComplete} />
              <FormStepTwo />
            </form>
        </div>
      </Layout>
    </div>
    )
};