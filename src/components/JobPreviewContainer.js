import styles from '../styles/JobContainer.module.css'
import Image from 'next/image'
import noImg from '../../public/images/empty.png'


const JobPreviewContainer = ({ jobTitle, companyName, contractType, location, jobSummary, companyLogo, tags }) => {
    
    return (
        <div className={styles.previewContainer}>
            <div className={styles.logoContainer} 
            style={{ position: 'relative', width: '150px', height: '150px'}}>
                <Image fill
                src={companyLogo ? companyLogo : noImg}
                style={{ objectFit: 'cover'}}
                alt="logo"
                />
             </div>
            <div className={styles.sectionOne}>
                <h3 className={styles.jobTitle}>{jobTitle ? jobTitle : 'Job Title'}</h3>
                <div className={styles.dateInfoCont}>
                    <h4 className={styles.companyName}>@ {companyName ? companyName : 'Company name'}</h4>
                    <p className={styles.postedOn}>Just now</p>
                </div>
                <p className={styles.jobDesc}>{jobSummary ? jobSummary : 'About the role...'}</p>
            </div>

            <div className={styles.sectionTwo}>
                <p className={styles.jobLoc}>{location ? location : 'Location'}</p>
                <div className={styles.tags}>
                    <p className={styles.tag}>{contractType ? ('#' + contractType) : ''}</p>
                    <p className={styles.tag}>{tags.tag1 ? ('#' + tags.tag1) : ''}</p>
                    <p className={styles.tag}>{tags.tag2 ? ('#' + tags.tag2) : ''}</p>
                    <p className={styles.tag}>{tags.tag3 ? ('#' + tags.tag3) : ''}</p>
                </div>
            </div>
        </div>
    )
};

export default JobPreviewContainer;