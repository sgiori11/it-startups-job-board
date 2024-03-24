import Layout from '../../components/layout';
import { supabase } from '../../lib/supabaseClient';
import slugify from 'slugify';
import styles from '../../styles/JobPage.module.css'
import Image from 'next/image';
import Head from 'next/head';


export default function JobPost({ job }) {

  function formatDate(timestamp) {
    const currentDate = new Date();
    const date = new Date(timestamp);

    const diffInDays = Math.floor((currentDate - date) / (1000 * 60 * 60 * 24));
    let formattedDate;

    if (diffInDays === 0) {
      formattedDate = 'today';
    } else if (diffInDays === 1) {
      formattedDate = 'yesterday';
    } else {
      const options = { month: 'short', day: 'numeric' };
      formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    }

    return formattedDate;
  }

  const timestamp = job.created_at;
  const formattedDate = formatDate(timestamp);


  const handleApplyClick = () => {

    if (job.apply_link.startsWith('http://') || job.apply_link.startsWith('https://')) {
      window.open(job.apply_link, '_blank');
    } else if (job.apply_link.includes('@')) {
      window.location.href = `mailto:${job.apply_link}`;
    }
  };
  
  return (
   <section className={styles.pageContainer}>
    <Layout>
     <Head>
        <title>{job.job_title} at {job.company_name} - Startup Jobs Italia</title>
        <meta name="description" content={`${job.job_title} job opportunity at ${job.company_name}. ${job.summary}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
     </Head>
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
                    <p className={styles.postedOn}>Posted&nbsp; 
                        {formattedDate}
                    </p>
                </div>
              </div>
                <div className={styles.tags}>
                    <p className={styles.tag}>{job.contract_type}</p>
                    {job.tag_one && <p className={styles.tag}>{job.tag_one}</p>}
                    {job.tag_two && <p className={styles.tag}>{job.tag_two}</p>}
                    {job.tag_three && <p className={styles.tag}>{job.tag_three}</p>}
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
                    {job.tag_one && <p className={styles.tag}>{job.tag_one}</p>}
                    {job.tag_two && <p className={styles.tag}>{job.tag_two}</p>}
                    {job.tag_three && <p className={styles.tag}>{job.tag_three}</p>}
                </div>
                <button className={styles.applyCTA} onClick={handleApplyClick}>Apply to job</button>
            </div>
        </section>
    </Layout>
  </section>
)}


export async function getStaticPaths() {
  // Return a list of possible value for id and slug
  let { data } = await supabase
    .from('jobs')
    .select('id');

  let paths = data.map((job) => ({
      params: {
          slug: job.job_title,
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
