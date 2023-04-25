import Layout from '../../components/layout';
import { supabase } from '../../lib/supabaseClient';
import slugify from 'slugify';
import styles from '../../styles/JobPage.module.css'
import Image from 'next/image';


export default function JobPost({ job }) {

  const handleApplyClick = () => {
    console.log("apply button clicked")
    if (job.apply_link.startsWith('http://') || job.apply_link.startsWith('https://')) {
      window.open(job.apply_link, '_blank');
    } else if (job.apply_link.includes('@')) {
      console.log("it's an email")
      window.location.href = `mailto:${job.apply_link}`;
    }
  };
  
  return (
   <section className={styles.pageContainer}>
    <Layout>
        <section className={styles.heroSection}>
            <div className={styles.logoContainer} 
                style={{ position: 'relative', width: '200px', height: '200px'}}>
                <Image fill
                style={{ objectFit: "contain", width: '100%', height: '100%'}}
                src={`https://hewqsbwtsubfefrjhlol.supabase.co/storage/v1/object/public/logos/${job.logo_url}`}
                alt="logo"
                />
             </div>
        
            <div className={styles.sectionOne}>
               <div>
                <h1 className={styles.jobTitle}>
                    {job.job_title}
                </h1>
                <div className={styles.dateInfoCont}>
                    <h2 className={styles.companyName}>
                        @ {job.company_name}
                    </h2>
                    <p className={styles.postedOn}>
                        {job.created_at}
                    </p>
                </div>
              </div>
                <div className={styles.tags}>
                    <p className={styles.tag}>#{job.contract_type}</p>
                    <p className={styles.tag}>{job.tag_one ? ('#' + job.tag_one) : ''}</p>
                    <p className={styles.tag}>{job.tag_two ? ('#' + job.tag_two) : ''}</p>
                    <p className={styles.tag}>{job.tag_three ? ('#' + job.tag_three) : ''}</p>
                </div>
            </div>
            <div className={styles.sectionTwo}>
                <button className={styles.applyCTA} onClick={handleApplyClick}>Apply</button>
            </div>
        </section>
        <section className={styles.jobSection}>
          <div className={styles.jobDescCont}>
           <div dangerouslySetInnerHTML={{__html: job.job_desc}} />
            </div>
            <div className={styles.applyModule}>
                <h3>{job.job_title}</h3>
                <p className={styles.jobLoc}>
                    {job.location}
                </p>
                <div className={styles.moduleTags}>
                    <p className={styles.tag}>#{job.contract_type}</p>
                    <p className={styles.tag}>{job.tag_one ? ('#' + job.tag_one) : ''}</p>
                    <p className={styles.tag}>{job.tag_two ? ('#' + job.tag_two) : ''}</p>
                    <p className={styles.tag}>{job.tag_three ? ('#' + job.tag_three) : ''}</p>
                </div>
                <button className={styles.applyCTA} onClick={handleApplyClick}>Apply to job</button>
            </div>
        </section>
    </Layout>
  </section>
)}


export async function getStaticPaths() {
  // Return a list of possible value for id
  let { data } = await supabase.from('jobs').select('id');

  let paths = data.map((job) => ({
      params: {
          id: job.id.toString(), 
      },
  }));

  return {
      paths,
      fallback: 'blocking',
  };
}


    export async function getStaticProps({ params }) {
        // Fetch necessary data for the post using params.id
        let { data, error } = await supabase
          .from('jobs')
          .select('*')
          .eq('id', params.id)
          .single();
      
        if (error) {
          console.error(error);
          return {
            notFound: true,
          };
        }
      
        return {
          props: {
            job: data,
          },
        };
      }