import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import styles from '../styles/JobBoard.module.css';
import JobContainer from '@/components/JobContainer'
import Link from 'next/link';
import slugify from 'slugify';

const JobBoard = ({ jobs }) => {
  
//Job search 
const [searchResults, setSearchResults] = useState([]);

const handleSearch = async (e) => {
  e.preventDefault();
  const query = e.target.elements.q.value;
  const { data, error } = await supabase
    .from('jobs')
    .select()
    .order('created_at', { ascending: false }) // sort by most recent
    .textSearch('fts', query, {
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
        <form className={styles.searchBarCont} onSubmit={(e) => handleSearch(e)}>
          <input 
            className={styles.searchBar}
            //type="search" 
            id="site-search" 
            name="q"
            placeholder="Search startup jobs" />
        </form>

        {searchResults.length === 0 ? (
          !jobs || jobs.length === 0 ? (
           <p>Loading...</p>
           ) : (
          jobs.map((job) => 
              <Link href={`/jobs/${job.id}`} key={slugify(job.job_title)}>
                <JobContainer job={job} key={job.id} />
              </Link>
              )
           )
          ) : (
          searchResults.map((job) => 
              <Link href={`/jobs/${job.id}`} key={slugify(job.job_title)}>
                <JobContainer job={job} key={job.id} />
               </Link>
              )
          )}
      </div>
    </div>

)};

export default JobBoard;