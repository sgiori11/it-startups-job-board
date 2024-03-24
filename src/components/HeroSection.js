import React from 'react';
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/HeroSection.module.css'
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import Image from 'next/image';
import Link from 'next/link';
import logoOne from '../../public/images/dummylogo.jpg'
import logoTwo from '../../public/images/dummylogo2.jpg'
import logoThree from '../../public/images/dummylogo3.jpg'
import { useUser } from "../context/user";
import { useState } from 'react'
import { useRouter } from 'next/router';
import LoginScreen from './LoginPage'; 

const HeroSection = () => {

  const [showModal, setShowModal] = useState();
  const { user } = useUser();
  const router = useRouter();


    const handlePostJob = () => {
        if (!user || user == null) {
          setShowModal(true);
          } else {
          router.push('/form')
          setShowModal(false);
        }  
    };

    return (
      <section className={styles.heroContainer}>
        <div className={styles.topSection}>
        <p>🌎 &nbsp;&nbsp;Build something sustainable. Change the world.</p>
        <h1 className={utilStyles.heading2Xl + ' ' + styles.headingOne}>
        A Hub for Italian Startup Opportunities<span className={styles.span}>.</span> 
        </h1>
        <h2 className={styles.h2}>Find your next co-founder, programmer, or inspiring project.</h2>
        <div className={styles.btnsContainer}>
          <button className={styles.primaryCTA} onClick={handlePostJob}>Post a Role</button>
          <Link href="#jobBoard" className={styles.secondaryCTA}>View Openings</Link>
        </div>
       </div>
       <section className={styles.heroElements}>
          <div className={styles.jobcontainer}>
  <div className={styles.joblogoContainer}
      style={{ position: 'relative', width: '60px', height: '60px'}}>
      <Image
      style={{ objectFit: "cover", width: '100%', height: '100%'}}
      src={logoOne}
      alt="logo"
      />
  </div>
  <div className={styles.jobsectionOne}>
      <h3 className={styles.jobjobTitle}>
          Fullstack Engineer
      </h3>
      <div className={styles.jobdateInfoCont}>
          <h4 className={styles.jobcompanyName}>
          📍 Topix - Remote
          </h4>
      </div>
      <p className={styles.jobjobDesc}>
          Seeking a fullstack dev for a project related to carbon emissions calculations.
      </p>
      </div>
      <div className={styles.jobsectionTwo}>
      <div className={styles.jobtags}>
           <p className={styles.jobtag}>Early Stage</p>
           <p className={styles.jobtag}>Sustainability</p>
           <p className={styles.jobtag}>Green</p>
      </div>
     </div>
          </div>
          <div className={styles.jobcontainer}>
  <div className={styles.joblogoContainer}
      style={{ position: 'relative', width: '60px', height: '60px'}}>
      <Image style={{ objectFit: "cover", width: '100%', height: '100%'}}
      src={logoTwo}
      alt="logo"
      />
  </div>
  <div className={styles.jobsectionOne}>
      <h3 className={styles.jobjobTitle}>
      Seeking Co-Founder/CTO
      </h3>
      <div className={styles.jobdateInfoCont}>
          <h4 className={styles.jobcompanyName}>
          📍 SlowwwFashion - Trieste
          </h4>
      </div>
      <p className={styles.jobjobDesc}>
      I’m looking for a technologist to help scale a prototype I’ve built in Bubble that...
      </p>
      </div>
      <div className={styles.jobsectionTwo}>
      <div className={styles.jobtags}>
           <p className={styles.jobtag}>Fashion</p>
           <p className={styles.jobtag}>Women Led</p>
           <p className={styles.jobtag}>Recycling</p>
      </div>
     </div>
          </div>
          <div className={styles.jobcontainer}>
  <div className={styles.joblogoContainer}
      style={{ position: 'relative', width: '60px', height: '60px'}}>
      <Image style={{ objectFit: "cover", width: '100%', height: '100%'}}
      src={logoThree}
      alt="logo"
      />
  </div>
  <div className={styles.jobsectionOne}>
      <h3 className={styles.jobjobTitle}>
      Product Designer Needed
      </h3>
      <div className={styles.jobdateInfoCont}>
          <h4 className={styles.jobcompanyName}>
          📍 SaveIT - Remote
          </h4>
      </div>
      <p className={styles.jobjobDesc}>
      Come join a small team of three to design an AI-powered UNESCO app for Rome.
      </p>
      </div>
      <div className={styles.jobsectionTwo}>
      <div className={styles.jobtags}>
           <p className={styles.jobtag}>Designer</p>
           <p className={styles.jobtag}>History Nerds</p>
           <p className={styles.jobtag}>AR/VR</p>
      </div>
     </div>
          </div>
      </section>
        {showModal && (
          <LoginScreen showModal={showModal} setShowModal={setShowModal} />
        )}
      </section>
    );
  };
  
  export default HeroSection;
  