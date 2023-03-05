import { useState } from 'react';
import styles from '../styles/Form.module.css';
import Link from 'next/link';
import Button from './Button';
import JobPreviewContainer from './JobPreviewContainer';
 
export default function FormStepThree({ stepTwoComplete, stepThreeComplete, handleStepThree, handleStepThreeBack,
 jobTitle, companyName, contractType, location, jobSummary, companyLogo, tags }) {

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
      
          <JobPreviewContainer 
            jobTitle={jobTitle}
            companyName={companyName}
            contractType={contractType}
            location={location}
            jobSummary={jobSummary}
            companyLogo={companyLogo}
            tags={tags}
           />

      <div className={styles.buttonsContainer}>
        <Button className={styles.prevStepBtn} onClick={handleBack} text="Back" />
        <button className={styles.nextStepBtn}  type="submit">Publish Job</button>
      </div>
    </section>
    )
};