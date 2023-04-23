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

  if (!user) {
    return null;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log('Rendered userData:', userData); // Check rendered userData

  return (
    <Layout>
    <div className={styles.pageWrap}>
      <header className={styles.header}>My Job Listings</header>
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
  );
}
