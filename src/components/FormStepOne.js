import { createContext, useContext, useState } from 'react';
import styles from '../styles/Form.module.css';
import Link from 'next/link';
import Button from './Button';


export const FormStepOneContext = createContext();

export default function FormStepOne({ handleStepOne, stepOneComplete }) {

  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contractType, setContractType] = useState('');
  const [location, setLocation] = useState('');
  const [jobSummary, setJobSummary] = useState('');
  const [companyLogo, setCompanyLogo] = useState('');
  const [fileDragged, setFileDragged] = useState(false);
  
  const stepOneData = { jobTitle, companyName, contractType, location, jobSummary, companyLogo };

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'job-title':
        setJobTitle(e.target.value);
        break;
      case 'company-name':
        setCompanyName(e.target.value);
        break;
      case 'contract-type':
        setContractType(e.target.value);
        break;
      case 'location':
        setLocation(e.target.value);
        break;
      case 'job-summary':
        setJobSummary(e.target.value);
        break;
      case 'company-logo':
        setCompanyLogo(URL.createObjectURL(event.target.files[0]));
        break;
      default: 
        return null
    }
 };

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
    <FormStepOneContext.Provider value={stepOneData}>
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
            placeholder='Name of position'/>
        </span>
        <span className={styles.span}>
          <label className={styles.label} htmlFor="company-name">Company name:</label>
          <input className={styles.input} 
            type="text" id="company-name" 
            name="company-name" 
            onChange={handleChange} 
            value={companyName}
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
            onChange={handleChange} 
            value={contractType}
            placeholder='ex. "full-time"' />
        </span>
        <span className={styles.span}>
          <label className={styles.label} htmlFor="location">Location:</label>
          <input className={styles.input} 
            type="text" 
            id="location" 
            name="location"
            onChange={handleChange} 
            value={location}
            placeholder='ex. "Remote"' />
        </span>
      </div>
      <div>
         <label className={styles.label} htmlFor="job-summary">Listing summary:</label>
         <textarea className={styles.textArea} 
            id="job-summary" 
            name="job-summary" 
            onChange={handleChange} 
            value={jobSummary}
            placeholder='Summarize the opportunity in 340 characters or less.'></textarea>
      </div>
      <div className={styles.logoContainer}>
        <label className={styles.label} htmlFor="logo">Company logo:</label>
        <input className={ fileDragged ? styles.fileSelected + ' ' + styles.input : styles.input }
           type="file" 
           id="logo" 
           name="company-logo" 
           onChange={handleChange} 
           accept=".jpg, .png" 
           onDragOver={handleDragOver} onDragLeave={handleDragLeave}
       />
      </div>
    </div>
    <Button className={styles.nextStepBtn} onClick={onClick} text="Add details" />
     </section>
   </FormStepOneContext.Provider>
 )
};