import Layout from '../../components/Layout';
import { supabase } from '../../lib/supabaseClient';
import slugify from 'slugify';
import styles from '../../styles/JobPage.module.css'
import Image from 'next/image';


export default function JobPost({ job }) {
  return (
   <section className={styles.pageContainer}>
    <Layout>
        <section className={styles.heroSection}>
            <div className={styles.logoContainer} 
                style={{ position: 'relative', width: '200px', height: '200px'}}>
                <Image fill
                style={{ objectFit: "cover", width: '100%', height: '100%'}}
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
                    <p className={styles.tag}>#{job.tag_one}</p>
                    <p className={styles.tag}>#{job.tag_two}</p>
                    <p className={styles.tag}>#{job.tag_three}</p>
                </div>
            </div>
            <div className={styles.sectionTwo}>
                <a className={styles.applyCTA}>Apply</a>
            </div>
        </section>
        <section className={styles.jobSection}>
          <div className={styles.jobDescCont}>
            <p className={styles.jobText}>
                {job.job_desc}
            </p>
            </div>
            <div className={styles.applyModule}>
                <h3>{job.job_title}</h3>
                <p className={styles.jobLoc}>
                    {job.location}
                </p>
                <div className={styles.moduleTags}>
                    <p className={styles.tag}>#{job.contract_type}</p>
                    <p className={styles.tag}>#{job.tag_one}</p>
                    <p className={styles.tag}>#{job.tag_two}</p>
                    <p className={styles.tag}>#{job.tag_three}</p>
                </div>
                <a className={styles.applyCTA}>Apply to job</a>
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
        fallback: false,
    };
  }


export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
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