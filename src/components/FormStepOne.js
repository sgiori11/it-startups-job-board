import styles from '../styles/Form.module.css';
import { useState } from 'react';
import Link from 'next/link';
import Button from './Button';


export default function FormStepOne({ handleStepOne, stepOneComplete, handleChange, jobTitle, companyName, contractType, location, jobSummary, companyLogo }) {

  const fileTypes = [
    "image/jpeg",
    "image/png",
    "image/svg+xml"
  ];

  const maxFileSize = 1 * 1024 * 1024; // 1 MB in bytes
  
  const [fileDragged, setFileDragged] = useState(false);
  const [error, setError] = useState('');

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

 
  const validFileType = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      setError("No file selected");
      setFileDragged(false);
    } else if (!fileTypes.includes(selectedFile.type)) {
      setError("Incorrect file type. Select a png or jpeg image.");
      setFileDragged(false);
    } else if (selectedFile.size > maxFileSize) {
      setError("File too large. Select a file under 1MB.");
      setFileDragged(false);
    }
     else {
      setError('');
      handleDragOver(e);
      handleChange(e);
    }
  };
  
  const onClick = (e) => {
    e.preventDefault();

     // Get all required input fields
    const requiredFields = document.querySelectorAll('input[data-step="step-one"][aria-required="true"], textarea[data-step="step-one"][aria-required="true"]');
    let allFieldsFilledOut = true;

    requiredFields.forEach(field => {
      if (!field.value) {
        allFieldsFilledOut = false;
        field.style.borderColor = 'red';
        console.log("field is not filled")
      } else {
        field.style.borderColor = '';
        console.log("field is filled")
      }
    });
    
    if (allFieldsFilledOut) {
      console.log("handle step one evoked")
      handleStepOne();
    }
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
          <label className={styles.label} htmlFor="job-title">Job title *</label>
          <input className={styles.input} 
            type="text" 
            id="job-title" 
            name="job-title"
            onChange={handleChange} 
            value={jobTitle}
            placeholder='Name of position'
            aria-required="true"
            data-step="step-one"
            required />
        </span>
        <span className={styles.span}>
          <label className={styles.label} htmlFor="company-name">Company name *</label>
          <input className={styles.input} 
            type="text" id="company-name" 
            name="company-name" 
            onChange={handleChange} 
            value={companyName}
            placeholder='Name of startup'
            aria-required="true"
            data-step="step-one"
            required />
        </span>
       </div>
       <div className={styles.spanContainer}>
        <span className={styles.span}>
          <label className={styles.label} htmlFor="contract">Contract type *</label>
          <input className={styles.input} 
            type="text" 
            id="contract" 
            name="contract-type"
            onChange={handleChange} 
            value={contractType}
            placeholder='ex. "full-time"'
            aria-required="true" 
            data-step="step-one"
            required />
        </span>
        <span className={styles.span}>
          <label className={styles.label} htmlFor="location">Location *</label>
          <input className={styles.input} 
            type="text" 
            id="location" 
            name="location"
            onChange={handleChange} 
            value={location}
            placeholder='ex. "Remote"' 
            aria-required="true"
            data-step="step-one"
            required />
        </span>
      </div>
      <div>
         <label className={styles.label} htmlFor="job-summary">Listing summary *</label>
         <textarea className={styles.textArea} 
            id="job-summary" 
            name="job-summary" 
            onChange={handleChange} 
            value={jobSummary}
            placeholder='Summarize the opportunity in 100 characters or less.'
            aria-required="true"
            data-step="step-one"
            required
            maxLength={100}></textarea>
      </div>
      <div className={styles.logoContainer}>
        <label className={styles.label} htmlFor="logo">Company logo * 
          <span style={{fontSize: '0.7em', display: 'block', paddingTop: '10px'}}>Accepted: JPEG, PNG, or SVG under 1MB</span>
        </label>
        <p style={{color: 'red'}}>{error}</p>
        <input className={ fileDragged ? styles.fileSelected + ' ' + styles.input : styles.input }
           type="file" 
           id="logo" 
           name="company-logo" 
           onChange={validFileType}
           accept=".jpg, .png, .svg" 
           onDragOver={handleDragOver} 
           onDragLeave={handleDragLeave} 
           aria-required="true"
           data-step="step-one"
           required
       />
      </div>
    </div>
    <Button className={styles.nextStepBtn} onClick={onClick} text="Add details" />
     </section>
 )
};