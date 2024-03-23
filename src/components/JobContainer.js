import styles from '../styles/JobContainer.module.css'
import Image from 'next/image'
//import testImg from '../../public/images/logo.svg'

const JobContainer = ({ job }) => {

    function formatDate(timestamp) {
        const currentDate = new Date();
        const date = new Date(timestamp);
    
        const diffInDays = Math.floor((currentDate - date) / (1000 * 60 * 60 * 24));
        let formattedDate;
    
        if (diffInDays === 0) {
          formattedDate = 'Today';
        } else if (diffInDays === 1) {
          formattedDate = 'Yesterday';
        } else {
          const options = { month: 'short', day: 'numeric' };
          formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        }
    
        return formattedDate;
      }
    
      const timestamp = job.created_at;
      const formattedDate = formatDate(timestamp);
    
       
    
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer} 
                style={{ position: 'relative', width: '60px', height: '60px'}}>
                <Image fill
                style={{ objectFit: "contain", width: '100%', height: '100%'}}
                src={`https://hewqsbwtsubfefrjhlol.supabase.co/storage/v1/object/public/logos/${job.logo_url}`}
                alt="logo"
                />
             </div>
            <div className={styles.sectionOne}>
                <h3 className={styles.jobTitle}>
                    {job.job_title}
                </h3>
                <div className={styles.dateInfoCont}>
                    <h4 className={styles.companyName}>
                    📍 {job.company_name} -  {job.location}
                    </h4>
                    <p className={styles.postedOn}>
                        {formattedDate}
                    </p>
                </div>
                <p className={styles.jobDesc}>
                    {job.summary}
                </p>
            </div>
            <div className={styles.sectionTwo}>
                <div className={styles.tags}>
                     {job.tag_three && <p className={styles.tag}>{job.tag_three}</p>}
                    {job.tag_three && <p className={styles.tag}>{job.tag_three}</p>}
                    {job.tag_three && <p className={styles.tag}>{job.tag_three}</p>}
                </div>
         </div>
        </div>
    )
};

export default JobContainer;