import { useState } from 'react';
import styles from '../styles/Form.module.css';
import Link from 'next/link';
import Button from './Button';

export default function FormStepTwo({ handleStepTwo, handleStepTwoBack, stepOneComplete, stepTwoComplete, tags, handleTagChange}) {

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
        <p className={styles.label}>
            Enter up to three tags (optional):
        </p>
        <div className={styles.tagContainer}>
         <div className={styles.tagWrap}>
            <label className={styles.label} htmlFor="tag1">#</label>
            <input className={styles.input} 
                placeholder="FemaleFounder"
                type="text"
                id="tag1"
                name="tag1"
                value={tags.tag1}
                onChange={handleTagChange}
            />
         </div>
         <div className={styles.tagWrap}>
            <label className={styles.label} htmlFor="tag2">#</label>
            <input className={styles.input}
                placeholder="GreenJob"
                type="text"
                name="tag2"
                id="tag2"
                value={tags.tag2}
                onChange={handleTagChange}

             />
         </div>
         <div className={styles.tagWrap}>
             <label className={styles.label} htmlFor="tag3">#</label>
            <input className={styles.input}
                placeholder="RemoteOK"
                type="text"
                id="tag3"
                name="tag3"
                value={tags.tag3}
                onChange={handleTagChange}
            />
         </div>
        </div>
         <label className={styles.label} htmlFor="job-desc">Job description:</label>
         <textarea className={styles.jobDescription} 
            id="job-desc" 
            name="job-desc" 
            placeholder='Provide a detailed description of the role or opportunity.'
            required></textarea>
       </div>
       <div className={styles.buttonsContainer}>
        <Button className={styles.prevStepBtn} onClick={handleBack} text="Back" />
        <Button className={styles.nextStepBtn} onClick={handleNext} text="Preview" />
      </div>
    </section>

    )
};