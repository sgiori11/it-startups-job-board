import { useState, useRef, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import styles from '../styles/Form.module.css';
import utilStyles from '../styles/utils.module.css';
import FormStepOne from '@/components/FormStepOne';
import FormStepTwo from '@/components/FormStepTwo';
import FormStepThree from '@/components/FormStepThree';
import Layout from '@/components/layout';
import ReactQuill from 'react-quill';
import DOMPurify from 'dompurify';


export default function Form() {
    const [stepOneComplete, setStepOneComplete] = useState(false);
    const [stepTwoComplete, setStepTwoComplete] = useState(false);
    const [stepThreeComplete, setStepThreeComplete] = useState(false);
    const [step, setStep] = useState('Step 1: Create your listing preview');

    const [jobTitle, setJobTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [contractType, setContractType] = useState('');
    const [location, setLocation] = useState('');
    const [jobSummary, setJobSummary] = useState('');
    const [companyLogo, setCompanyLogo] = useState('');
    const [logoFile, setLogoFile] = useState('');
    const fileExt = logoFile ? logoFile.name.split('.').pop() : '';
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `${fileName}`
    const [tags, setTags] = useState({
      tag1: "",
      tag2: "",
      tag3: ""
    });
    const [jobDescription, setJobDescription] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
 
   
  

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log("form submitted");
      try {
        const [jobInsertResult, logoUploadResult] = await Promise.all ([

           supabase
          .from('jobs')
          .insert({
          job_title: jobTitle,
          company_name: companyName,
          contract_type: contractType,
          location: location,
          summary: jobSummary,
          tag_one: tags.tag1,
          tag_two: tags.tag2,
          tag_three: tags.tag3,
          job_desc: jobDescription,
          logo_url: filePath,
        }),

        supabase
        .storage
        .from('logos')
        .upload(filePath, logoFile, { upsert: true })

      ]);

        if (jobInsertResult.error || logoUploadResult.error) {
          throw new Error('Error submitting job listing');
        } else {
          setSuccessMessage('Your job listing has been submitted successfully!');
          setJobTitle('');
          setCompanyName('');
          setContractType('');
          setLocation('');
          setJobSummary('');
          setTags({ tag1: '', tag2: '', tag3: ''});
          setJobDescription('');

        }
      } catch (error) {
        setErrorMessage('There was an error submitting your job listing.');
        console.log(error);
      }
    };
  


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
          setCompanyLogo(URL.createObjectURL(e.target.files[0]));
          setLogoFile(e.target.files[0]);
          break;
        default: 
          return null
      }
   };

   const handleQuillChange = () => {
    let quillContent = document.querySelector('.ql-editor').innerHTML;
      setJobDescription(quillContent);
      console.log('before Sanitize', jobDescription);
  };

  const sanitizeQuillContent = () => {
    const sanitizedJobDesc = DOMPurify.sanitize(jobDescription);
    console.log('after Sanitize', sanitizedJobDesc);
    setJobDescription(sanitizedJobDesc);
  }


    const handleStepOne = () => {
        setStepOneComplete(true);
        setStep('Step 2: Add details about the role');
    };

    const handleStepTwo = () => {
        setStepTwoComplete(true);
        setStep('Step 3: Preview your listing');
        sanitizeQuillContent();
        
    }

    const handleStepTwoBack = () => {
      setStepTwoComplete(false);
      setStepOneComplete(false);
      setStep('Step 1: Create your listing preview');
    }

    const handleStepThree = () => {
      setStepThreeComplete(true);
      setStep('');
    }

    const handleStepThreeBack = () => {
      setStepThreeComplete(false);
      setStepTwoComplete(false);
      setStep('Step 2: Add details about the role');
     
     
    }

    const handleTagChange = (e) => {
      const { name, value } = e.target;
      setTags((prevTags) => ({
        ...prevTags,
        [name]: value,
      }));
    };
  
    
    return(
    <div className={styles.formBody}>
      <Layout>
        <div className={styles.formContainer}>
            <h1 className={utilStyles.headingXl}
                style={{textAlign: 'center'}}
            >Post a Job on Startup Finder</h1>
            <p className={utilStyles.subheading}>{step}</p>
            <div className={styles.progressBarContainer}>
                <div className={
                        stepOneComplete
                          ? styles.progressBarOne + ' ' + styles.stepComplete
                          : styles.progressBarOne
                      }
                ></div>
                <span className={
                        stepOneComplete
                          ? styles.breakComplete
                          : styles.break
                      }
                ></span>
                <div className={
                      stepTwoComplete ? styles.progressBarTwo + ' ' + styles.stepComplete : 
                      (!stepTwoComplete && stepOneComplete) 
                          ? styles.progressBarTwo + ' ' + styles.stepInProgress 
                          : styles.progressBarTwo
                }></div>
                <span className={
                        stepTwoComplete
                          ? styles.breakComplete
                          : styles.break
                      }></span>
                <div className={
                      stepThreeComplete ? styles.progressBarThree + ' ' + styles.stepComplete : 
                      (!stepThreeComplete && stepTwoComplete) 
                          ? styles.progressBarThree + ' ' + styles.stepInProgress 
                          : styles.progressBarThree
                }></div>
            </div>
            <form onSubmit={handleSubmit}>
              {successMessage && <p>{successMessage}</p>}
              {errorMessage && <p>{errorMessage}</p>}
              <FormStepOne 
                  handleChange={handleChange}
                  jobTitle={jobTitle}
                  companyName={companyName}
                  contractType={contractType}
                  location={location}
                  jobSummary={jobSummary}
                  companyLogo={companyLogo}
                  handleStepOne={handleStepOne} 
                  stepOneComplete={stepOneComplete} />
              <FormStepTwo 
                  handleChange={handleChange}
                  handleStepTwo={handleStepTwo} 
                  handleStepTwoBack={handleStepTwoBack}
                  stepOneComplete={stepOneComplete}
                  stepTwoComplete={stepTwoComplete}
                  handleTagChange={handleTagChange}
                  tags={tags}
                  jobDescription={jobDescription}
                  handleQuillChange={handleQuillChange}
                   />
              <FormStepThree 
                  jobTitle={jobTitle}
                  companyName={companyName}
                  contractType={contractType}
                  location={location}
                  jobSummary={jobSummary}
                  companyLogo={companyLogo}
                  tags={tags}
                  handleStepThree={handleStepThree}
                  handleStepThreeBack={handleStepThreeBack}
                  stepOneComplete={stepOneComplete}
                  stepTwoComplete={stepTwoComplete}
                  stepThreeComplete={stepThreeComplete}
                  />
            </form>
        </div>
      </Layout>
    </div>
    )
};