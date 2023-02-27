import { useState } from 'react';
import styles from '../styles/Form.module.css';
import Link from 'next/link';
import Button from './Button';

export default function FormStepTwo({ handleStepTwo, handleStepTwoBack, stepOneComplete, stepTwoComplete}) {

    const handleNext = (e) => {
        e.preventDefault();
        handleStepTwo();
      };

      const handleBack = (e) => {
        e.preventDefault();
        handleStepTwoBack();
         
      };

    return (
     <section className={
        (!stepOneComplete) ? styles.hidden :
          (stepOneComplete && !stepTwoComplete) 
          ? styles.stepTwoSection
          : styles.hidden
      }>
       <div className={styles.stepTwoContainer}>
         <label className={styles.label} htmlFor="job-desc">Job description:</label>
         <textarea className={styles.jobDescription} 
            id="job-desc" 
            name="job-desc" 
            placeholder='Provide a detailed description of the role or opportunity.'></textarea>
       </div>
       <div className={styles.buttonsContainer}>
        <Button className={styles.prevStepBtn} onClick={handleBack} text="Back" />
        <Button className={styles.nextStepBtn} onClick={handleNext} text="Preview" />
      </div>
    </section>

    )
};