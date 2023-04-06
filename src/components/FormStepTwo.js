import { useState } from 'react';
import styles from '../styles/Form.module.css';
import Link from 'next/link';
import Button from './Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';




export default function FormStepTwo({ handleStepTwo, handleStepTwoBack, stepOneComplete, stepTwoComplete, tags, jobDescription, handleTagChange, handleQuillChange}) {

  const QuillNoSSRWrapper = dynamic(() => import('react-quill'), {
    ssr: false,
  });
  
    const handleNext = (e) => {
        e.preventDefault();

          // Get all required input fields
      const isBlank = document.querySelector('.ql-blank');
       
      if (isBlank) {
        isBlank.parentElement.style.borderColor = 'red';
        console.log("field is not filled")
      } else {
        document.querySelector('.ql-container').style.borderColor = '';
        handleStepTwo();
        console.log("field is filled")
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
         <QuillNoSSRWrapper 
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
       </div>
       <div className={styles.buttonsContainer}>
        <Button className={styles.prevStepBtn} onClick={handleBack} text="Back" />
        <Button className={styles.nextStepBtn} onClick={handleNext} text="Preview" />
      </div>
    </section>

    )
};