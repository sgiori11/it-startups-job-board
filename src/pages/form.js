import { useState } from 'react';
import styles from '../styles/Form.module.css';
import utilStyles from '../styles/utils.module.css';
import FormStepOne from '@/components/FormStepOne';
import FormStepTwo from '@/components/FormStepTwo';
import FormStepThree from '@/components/FormStepThree';
import Layout from '@/components/Layout';

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
          break;
        default: 
          return null
      }
   };

    const handleStepOne = () => {
        setStepOneComplete(true);
        setStep('Step 2: Add details about the role');
    };

    const handleStepTwo = () => {
        setStepTwoComplete(true);
        setStep('Step 3: Preview your listing');
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
    
    return(
    <div className={styles.formBody}>
      <Layout>
        <div className={styles.formContainer}>
            <h1 className={utilStyles.headingXl}>Post a Job on Startup Finder</h1>
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
            <form>
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
                  handleStepTwo={handleStepTwo} 
                  handleStepTwoBack={handleStepTwoBack}
                  stepOneComplete={stepOneComplete}
                  stepTwoComplete={stepTwoComplete}
                   />
              <FormStepThree 
                  jobTitle={jobTitle}
                  companyName={companyName}
                  contractType={contractType}
                  location={location}
                  jobSummary={jobSummary}
                  companyLogo={companyLogo}

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