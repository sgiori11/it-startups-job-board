import { useState } from 'react';
import styles from '../styles/Form.module.css';
import Link from 'next/link';
import Button from './Button';
 
export default function FormStepThree({ stepOneComplete, stepTwoComplete, stepThreeComplete, handleStepThree, handleStepThreeBack }) {

    const handleNext = (e) => {
        e.preventDefault();
        handleStepThree();
      };

      const handleBack = (e) => {
        e.preventDefault();
        handleStepThreeBack();
         
      };

    return(
        <section className={
            (!stepTwoComplete) ? styles.hidden :
              (stepTwoComplete && !stepThreeComplete) 
              ? styles.stepThreeSection
              : styles.hidden
          }>
            <div>Listing preview</div>


      <div className={styles.buttonsContainer}>
        <Button className={styles.prevStepBtn} onClick={handleBack} text="Back" />
        <Button className={styles.nextStepBtn} onClick={handleNext} text="Publish job" />
      </div>
    </section>
    )
};