import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import styles from '../styles/JobBoard.module.css';
import JobContainer from '@/components/JobContainer'
import Link from 'next/link';
import slugify from 'slugify';

const JobBoard = ({ jobs }) => {

  const generateSlug = (job) => {
    return `${slugify(job.job_title)}-${slugify(job.company_name)}-${job.id.slice(0, 5)}`;
  };

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const query = e.target.elements.q.value;
    const { data, error } = await supabase.from('jobs').select().textSearch('fts', query, {
      type: 'websearch',
    });

    if (error) {
      console.log(error);
      return;
    }

    setSearchResults(data);
  };

  return (
    <div id="jobBoard" className={styles.jobBoard}>
      <div className={styles.jobBoardContainer}>
        <h2 className={styles.h2}>Find your next role</h2>
        <form onSubmit={(e) => handleSearch(e)}>
          <input
            className={styles.searchBar}
            id="site-search"
            name="q"
            placeholder="Search startup jobs" />
        </form>

        {searchResults.length === 0 ? (
          !jobs || jobs.length === 0 ? (
            <p>Loading...</p>
          ) : (
            jobs.map((job) =>
            <Link href={`/jobs/${encodeURIComponent(job.job_title)}-${encodeURIComponent(job.company_name)}-${job.id}`} key={job.id}>
              <JobContainer job={job} key={job.id} />
            </Link>
          
            )
          )
        ) : (
          searchResults.map((job) =>
          <Link href={`/jobs/${encodeURIComponent(job.job_title)}-${encodeURIComponent(job.company_name)}-${job.id}`} key={job.id}>
             <JobContainer job={job} key={job.id} />
          </Link>
        
          )
        )}
      </div>
    </div>
  );
};

export default JobBoard;
