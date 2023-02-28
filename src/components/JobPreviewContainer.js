import styles from '../styles/JobContainer.module.css'
import Image from 'next/image'
import { useContext } from 'react';
import { FormStepOneContext } from './FormStepOne';


const JobPreviewContainer = () => {
    const stepOneData = useContext(FormStepOneContext);

    console.log('step one data', stepOneData); 
    const { jobTitle, companyName, contractType, location, jobSummary, companyLogo } = stepOneData;
    
    return (
        <div className={styles.container}>
            <Image
                className={styles.companyLogo}
                src={companyLogo}
                width={130}
                alt="logo"
            />
        
            <div className={styles.sectionOne}>
                <h3 className={styles.jobTitle}>{jobTitle}</h3>
                <div className={styles.dateInfoCont}>
                    <h4 className={styles.companyName}>@ {companyName}</h4>
                    <p className={styles.postedOn}>timeframe</p>
                </div>
                <p className={styles.jobDesc}>{jobSummary}</p>
            </div>

            <div className={styles.sectionTwo}>
                <p className={styles.jobLoc}>{location}</p>
                <div className={styles.tags}>
                    <p className={styles.tag}>#{contractType}</p>
                    <p className={styles.tag}>#</p>
                    <p className={styles.tag}>#</p>
                    <p className={styles.tag}>#</p>
                </div>
            </div>
        </div>
    )
};

export default JobPreviewContainer;