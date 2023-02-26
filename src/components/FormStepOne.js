import { useState } from 'react';
import styles from '../styles/Form.module.css';
import Link from 'next/link';
import Button from './Button';

export default function FormStepOne({ handleClick, stepOneComplete }) {

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add("dragover");
    console.log(e.target);
  };
  
  const handleDragLeave = (e) => {
    console.log("drag leave");
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("dragover");
  };
  
  const onClick = (e) => {
    e.preventDefault();
    handleClick();
  };

  return(
    <section className={
        stepOneComplete
        ? styles.hidden 
        : styles.stepOneSection
      }>
     <div className={styles.stepOneContainer}>
        <div className={styles.spanContainer}>
        <span className={styles.span}>
          <label className={styles.label} htmlFor="job-title">Job title:</label>
          <input className={styles.input} 
            type="text" 
            id="job-title" 
            name="job-title"
            placeholder='Name of position'/>
        </span>
        <span className={styles.span}>
          <label className={styles.label} htmlFor="company-name">Company name:</label>
          <input className={styles.input} 
            type="text" id="company-name" 
            name="company-name" 
            placeholder='Name of startup'/>
        </span>
       </div>
       <div className={styles.spanContainer}>
        <span className={styles.span}>
          <label className={styles.label} htmlFor="contract">Contract type:</label>
          <input className={styles.input} 
            type="text" 
            id="contract" 
            name="contract-type"
            placeholder='ex. "full-time"' />
        </span>
        <span className={styles.span}>
          <label className={styles.label} htmlFor="location">Location:</label>
          <input className={styles.input} 
            type="text" 
            id="location" 
            name="location"
            placeholder='ex. "Remote"' />
        </span>
      </div>
      <div>
         <label className={styles.label} htmlFor="job-desc">Listing summary:</label>
         <textarea className={styles.textArea} 
            id="job-desc" 
            name="job-desc" 
            placeholder='Summarize the opportunity in 340 characters or less.'></textarea>
      </div>
      <div className={styles.logoContainer}>
        <label className={styles.label} htmlFor="logo">Company logo:</label>
        <input className={styles.input} type="file" id="logo" name="company-logo" accept=".jpg, .png" 
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
       />
      </div>
    </div>
    <Button className={styles.nextStepBtn} onClick={onClick} text="Add details" />
   </section>
 )
};