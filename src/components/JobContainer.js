import styles from '../styles/JobContainer.module.css'
import Image from 'next/image'
import testImg from '../../public/images/logo.svg'

const JobContainer = ({ job }) => {
    
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer} 
                style={{ position: 'relative', width: '150px', height: '150px'}}>
                <Image fill
                src={testImg}
                alt="logo"
                />
             </div>
        
            <div className={styles.sectionOne}>
                <h3 className={styles.jobTitle}>{job.job_title}</h3>
                <div className={styles.dateInfoCont}>
                    <h4 className={styles.companyName}>@ {job.company_name}</h4>
                    <p className={styles.postedOn}>{job.created_at}</p>
                </div>
                <p className={styles.jobDesc}>{job.summary}</p>
            </div>

            <div className={styles.sectionTwo}>
                <p className={styles.jobLoc}>{job.location}</p>
                <div className={styles.tags}>
                    <p className={styles.tag}>#{job.contract_type}</p>
                    <p className={styles.tag}>#{job.tag_one}</p>
                    <p className={styles.tag}>#{job.tag_two}</p>
                    <p className={styles.tag}>#{job.tag_three}</p>
                </div>
            </div>
        </div>
    )
};

export default JobContainer;