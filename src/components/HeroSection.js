import React from 'react';
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/HeroSection.module.css'
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import Image from 'next/image';
import Link from 'next/link';
import purpleBg from '../../public/images/purplebg.png'
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
          <div></div>
          <div></div>
          <div></div>
          hello
      </section>
        {showModal && (
          <LoginScreen showModal={showModal} setShowModal={setShowModal} />
        )}
      </section>
    );
  };
  
  export default HeroSection;
  