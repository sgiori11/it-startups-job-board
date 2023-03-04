import styles from '../styles/Form.module.css';
import { useState } from 'react';
import Link from 'next/link';
import Button from './Button';


export default function FormStepOne({ handleStepOne, stepOneComplete, handleChange, jobTitle, companyName, contractType, location, jobSummary, companyLogo }) {

  const [fileDragged, setFileDragged] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFileDragged(true);
  };
  
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFileDragged(false);
  };
  
  const onClick = (e) => {
    e.preventDefault();
    handleStepOne();
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
            onChange={handleChange} 
            value={jobTitle}
            placeholder='Name of position'
            required />
        </span>
        <span className={styles.span}>
          <label className={styles.label} htmlFor="company-name">Company name:</label>
          <input className={styles.input} 
            type="text" id="company-name" 
            name="company-name" 
            onChange={handleChange} 
            value={companyName}
            placeholder='Name of startup'
            required />
        </span>
       </div>
       <div className={styles.spanContainer}>
        <span className={styles.span}>
          <label className={styles.label} htmlFor="contract">Contract type:</label>
          <input className={styles.input} 
            type="text" 
            id="contract" 
            name="contract-type"
            onChange={handleChange} 
            value={contractType}
            placeholder='ex. "full-time"' 
            required />
        </span>
        <span className={styles.span}>
          <label className={styles.label} htmlFor="location">Location:</label>
          <input className={styles.input} 
            type="text" 
            id="location" 
            name="location"
            onChange={handleChange} 
            value={location}
            placeholder='ex. "Remote"' 
            required />
        </span>
      </div>
      <div>
         <label className={styles.label} htmlFor="job-summary">Listing summary:</label>
         <textarea className={styles.textArea} 
            id="job-summary" 
            name="job-summary" 
            onChange={handleChange} 
            value={jobSummary}
            placeholder='Summarize the opportunity in 100 characters or less.'
            required
            maxLength={100}></textarea>
      </div>
      <div className={styles.logoContainer}>
        <label className={styles.label} htmlFor="logo">Company logo:</label>
        <input className={ fileDragged ? styles.fileSelected + ' ' + styles.input : styles.input }
           type="file" 
           id="logo" 
           name="company-logo" 
           onChange={(event) => {
            handleChange(event);
            handleDragOver(event);
          }} 
           accept=".jpg, .png" 
           onDragOver={handleDragOver} onDragLeave={handleDragLeave} 
           required
       />
      </div>
    </div>
    <Button className={styles.nextStepBtn} onClick={onClick} text="Add details" />
     </section>
 )
};