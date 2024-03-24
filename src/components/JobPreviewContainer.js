import styles from '../styles/JobContainer.module.css'
import Image from 'next/image'
import noImg from '../../public/images/empty.png'


const JobPreviewContainer = ({ jobTitle, companyName, location, jobSummary, companyLogo, tags }) => {
    
    return (
        <div className={styles.previewContainer}>
            <div className={styles.logoContainer} 
            style={{ position: 'relative', width: '60px', height: '60px'}}>
                <Image fill
                src={companyLogo ? companyLogo : noImg}
                style={{objectFit: "contain", width: '100%', height: '100%'}}
                alt="logo"
                />
             </div>
            <div className={styles.sectionOne}>
                <h3 className={styles.jobTitle}>{jobTitle ? jobTitle : 'Job Title'}</h3>
                <div className={styles.dateInfoCont}>
                    <h4 className={styles.companyName}>📍 {companyName ? companyName : 'Company name'}
                    -  {location ? location : 'Location'}
                    </h4>
                    <p className={styles.postedOn}>Just now</p>
                </div>
                <p className={styles.jobDesc}>{jobSummary ? jobSummary : 'About the role...'}</p>
            </div>
            <div className={styles.sectionTwo}>
                <div className={styles.tags}>
                    {tags.tag1 && <p className={styles.tag}>{tags.tag1}</p>}
                    {tags.tag2 && <p className={styles.tag}>{tags.tag2}</p>}
                    {tags.tag3 && <p className={styles.tag}>{tags.tag3}</p>}
                </div>
            </div>
        </div>  
    )
};

export default JobPreviewContainer;