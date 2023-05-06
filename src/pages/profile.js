import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import jobStyles from '../styles/JobBoard.module.css';
import JobContainer from '@/components/JobContainer';
import Link from 'next/link';
import Layout from '@/components/layout';
import styles from '../styles/Profile.module.css';
import { useUser } from '../context/user';
import { useRouter } from 'next/router';

export default function ProtectedAccountPage() {
  const { user } = useUser();
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();


  useEffect(() => {
    if (user) {
      fetchJobs();
    } else {
      router.push('/')
    }
  }, [user]);

  async function fetchJobs() {
    const { data } = await supabase
      .from('jobs')
      .select('*')
      .eq("user_id", user.id);

    console.log('Fetched data:', data); // Check fetched data

    setUserData(data ?? []);
    setLoading(false);
  }

  async function handleDelete(jobId) {
    await supabase
        .from('jobs')
        .delete()
        .match({ id: jobId });
    
    setUserData(userData.filter((job) => job.id !== jobId));
  
}

async function signOutUser() {
  console.log("sign out function invoked");
  await supabase.auth.signOut();

}

  if (!user) {
    return null;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log('Rendered userData:', userData); // Check rendered userData

  return (
   <div className={styles.pageBody}>
    <Layout>
       <Head>
        <title>My account - Startup Jobs Italia</title>
        <meta name="description" content="Manage your listings and bookmarked jobs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    <div className={styles.pageWrap}>
      <header className={styles.header}>My Job Listings</header>
      <button className={styles.signOut} onClick={signOutUser}>Sign out</button>
      <section className={styles.listingsContainer}>
        {userData.length === 0 ? (
            <p>No job listings found.</p>
        ) : (
        userData.map((job) => (
            <div key={job.id}>
                <div className={styles.btnsContainer}>
                  <button 
                    className={styles.deleteBtn}
                    onClick={() => handleDelete(job.id)}>Delete
                  </button>
                </div>
            <Link href={`/jobs/${job.id}`}>
              <JobContainer job={job} />
            </Link>
        </div>
        ))
        )}
      </section>
     </div>
    </Layout>
    </div>
  );
}
