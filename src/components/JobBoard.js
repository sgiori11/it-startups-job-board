import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import styles from '../styles/JobBoard.module.css';
import JobContainer from '@/components/JobContainer'
import Link from 'next/Link'
import slugify from 'slugify';

const JobBoard = ({ jobs }) => {
   // const [jobs, setJobs] = useState([]);

   // useEffect(() => {
      //fetch.('api url')
       // .then((res) => res.json())
        //.then((data) => {
            //setJobs(data);
        //});
     //   setJobs(data); 
   // }, []);
    
    
//Job search 
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
    <div className={styles.jobBoard}>
      <div className={styles.jobBoardContainer}>
        <h2 className={styles.h2}>Find your next role</h2>
        <form onSubmit={(e) => handleSearch(e)}>
          <input 
            className={styles.searchBar}
            type="search" 
            id="site-search" 
            name="q"
            placeholder="Search startup jobs" />
        </form>

        {searchResults.length === 0 ? (
          jobs.length === 0 ? (
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