import HeroSection from '@/components/HeroSection'
import Head from 'next/head'
import styles from '../styles/utils.module.css'
import Layout from '@/components/layout';
import JobBoard from '@/components/JobBoard';


export default function Home() {
  return (
    <Layout>
    <div>
      <Head>
        <title>Italian Startup Jobs</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <HeroSection />
      <JobBoard />
   </div>
   </Layout>
  )};