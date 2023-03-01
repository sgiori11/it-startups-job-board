import styles from '../styles/JobContainer.module.css'
import Image from 'next/image'
import noImg from '../../public/images/empty.png'


const JobPreviewContainer = ({ jobTitle, companyName, contractType, location, jobSummary, companyLogo }) => {
    
    return (
        <div className={styles.container}>
            <Image
                className={styles.companyLogo}
                src={companyLogo ? companyLogo : noImg}
                width={130}
                height={130}
                alt="logo"
            />
        
            <div className={styles.sectionOne}>
                <h3 className={styles.jobTitle}>{jobTitle ? jobTitle : 'Job Title'}</h3>
                <div className={styles.dateInfoCont}>
                    <h4 className={styles.companyName}>@ {companyName ? companyName : 'Company name'}</h4>
                    <p className={styles.postedOn}>timeframe</p>
                </div>
                <p className={styles.jobDesc}>{jobSummary ? jobSummary : 'About the role...'}</p>
            </div>

            <div className={styles.sectionTwo}>
                <p className={styles.jobLoc}>{location ? location : 'Location'}</p>
                <div className={styles.tags}>
                    <p className={styles.tag}>{contractType ? ('#' + contractType) : '@sgiori8'}</p>
                    <p className={styles.tag}></p>
                    <p className={styles.tag}></p>
                    <p className={styles.tag}></p>
                </div>
            </div>
        </div>
    )
};

export default JobPreviewContainer;