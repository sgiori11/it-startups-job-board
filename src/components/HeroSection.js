import utilStyles from '../styles/utils.module.css'
import styles from '../styles/HeroSection.module.css'
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import Image from 'next/image';
import Link from 'next/link';
import purpleBg from '../../public/images/purplebg.svg'
import { useUser } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import LoginScreen from './LoginScreen';

const HeroSection = () => {

  const [showModal, setShowModal] = useState();
  const user = useUser();

    const handlePrimaryBtnClick = () => {
        <Link href='./Form' />;
    };

    const handlePostJob = () => {
        if (!user) {
          setShowModal(true);
          } else {
          setShowModal(false);
          <Link href='./Form' />;
        }
    };

    return (
      <section className={styles.heroContainer + ' ' + styles.landingImg}>
        <div className={styles.topSection}>
        <h1 className={utilStyles.heading2Xl}>
            We match <span style={{fontWeight: 'bold'}}>IT</span> talent 
            with <span style={{fontWeight: 'bold'}}>IT</span> startups & founders
        </h1>
        <div className={styles.btnsContainer}>
          <PrimaryButton text="Post a Job" onClick={handlePostJob} />
          <SecondaryButton text="Find a Job" />
        </div>
       </div>
        
        <section className={styles.uspContainer}>
        <p style={{textAlign: 'center', fontWeight: '500', marginBottom: 30}}>
            What you can look forward to as a startup employee in Italy:
        </p>
          <div className={styles.uspSection}>
           <div className={styles.USPs}>
            <p>
            New and returning residents are eligible for a 70% tax break via
            “Rientro dei cervelli” dell’art. 5 del D.L. n. 34/2019
            </p>
           </div>
           <div className={styles.USPs}>
            <p>
            58 Unesco World Heritage sites and up to 300 🌞 days per year. 
            Remote work has never looked so good!
            </p>
           </div>
           <div className={styles.USPs}>
            <p>
            A budget of €200M 💸allocated to Italian startups, 
            backed by the Ministry of Economic Development. 
            </p>
           </div>
          </div>
        </section>
        <Image 
          priority
          alt='faded purple SVG background'
          src={purpleBg}
          className={styles.uspsBg}
        />
        {showModal && (
          <LoginScreen showModal={showModal} setShowModal={setShowModal} />
        )}
      </section>
    );
  };
  
  export default HeroSection;
  