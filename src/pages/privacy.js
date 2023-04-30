import Head from 'next/head';
import styles from '../styles/Footer.module.css'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <div>
        <iframe src="/privacy.html" className={styles.iframe}></iframe>
      </div>
    </>
  );
}
