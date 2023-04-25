import { useState } from 'react';
import styles from '../styles/Form.module.css';
import Link from 'next/link';
import Button from './Button';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


export default function FormStepTwo({ handleStepTwo, handleStepTwoBack, stepOneComplete, stepTwoComplete, tags, jobDescription, handleChange, handleTagChange, handleQuillChange, applyLink}) {

  
    const handleNext = (e) => {
        e.preventDefault();

      // Get all required input fields
      const jobDescisBlank = document.querySelector('.ql-blank');
      const applyLinkInput = document.querySelector('#apply-link');
      const linkErrorMessage = document.querySelector('#apply-link-error')
   
      let isValid = true;

      if (jobDescisBlank) {
        jobDescisBlank.parentElement.style.borderColor = 'red';
        isValid = false;
      }

      if (!applyLinkInput.value) {
        applyLinkInput.style.borderColor = 'red';
        isValid = false;
      }

      if  (!validateApplyLink(applyLinkInput.value)) {
        applyLinkInput.style.borderColor = 'red';
        linkErrorMessage.style.display = 'block';
        isValid = false;
      }
      
      if (isValid) {
        document.querySelector('.ql-container').style.borderColor = '';
        applyLinkInput.style.borderColor = '';
        linkErrorMessage.style.display = 'none';
        handleStepTwo();
      }
    };
    
      const handleBack = (e) => {
        e.preventDefault();
        handleStepTwoBack();
         
      };

      const modules = {
        toolbar: [
          [{'header': '2'}],
          ['bold', 'italic'],
          [{'list': 'ordered'}, {'list': 'bullet'}]
        ],
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        }
      };
      
      const formats = [  'header', 'bold', 'italic', 'list', 'bullet'];
      

      function isValidURL(url) {
        const urlRegex = /^(http(s)?:\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
        return urlRegex.test(url);
      }      
      
      function isValidEmail(email) {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return emailRegex.test(email);
      }
      
      function validateApplyLink(value) {
        if (isValidURL(value) || isValidEmail(value)) {
          console.log('Valid apply link');
          return true;
        } else {
          console.log('Invalid apply link');
          return false
        }
      }
      

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
         <label className={styles.label} htmlFor="job-desc">Job description *</label>
         <ReactQuill
            className={styles.quillEditor}
            id="job-desc" 
            name="job-desc" 
            placeholder='Provide a detailed description of the role or opportunity.'
            aria-required="true"
            data-step="step-two"
            required
            onChange={handleQuillChange}
            modules={modules}
            formats={formats}
          />
        <div className={styles.applyLinkCont}>
          <label className={styles.label} htmlFor="apply-link">Application link or email address *</label>
          <input className={styles.input}
               placeholder="ex. https://www.google.com/"
               type="text"
               id="apply-link"
               name="apply-link"
               aria-required="true"
               value={applyLink}
               onChange={handleChange}
               required />
            <span className={styles.applyLinkError} id="apply-link-error">Please enter a valid URL or email address.</span>
        </div>
       </div>
       
       <div className={styles.buttonsContainer}>
        <Button className={styles.prevStepBtn} onClick={handleBack} text="Back" />
        <Button className={styles.nextStepBtn} onClick={handleNext} text="Preview" />
      </div>
    </section>

    )
};