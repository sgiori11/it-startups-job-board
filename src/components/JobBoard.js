import React, { useState, useEffect } from 'react';
import styles from '../styles/JobBoard.module.css';
import utilStyles from '../styles/utils.module.css';
import data from '../assets/data.json';
import JobContainer from '@/components/JobContainer'

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
    
    

    
return (
    <div className={styles.jobBoard}>
      <div className={styles.jobBoardContainer}>
        <h2 className={styles.h2}>Find your next role</h2>
        <form>
          <input 
            className={styles.searchBar}
            type="search" 
            id="site-search" 
            name="q"
            placeholder="Search startup jobs" />
        </form>

        {
          jobs.length === 0 ? (
            <p>Loading...</p>
          ) : (
            jobs.map(job => (
                <JobContainer job={job} key={job.id} />

            ))
          )
        }
      </div>
    </div>

)};

export default JobBoard;