import { supabase } from '../lib/supabaseClient';
import HeroSection from '@/components/HeroSection'
import Head from 'next/head'
import Layout from '@/components/Layout';
import JobBoard from '@/components/JobBoard';


export default function Home({ jobs }) {
 
  return (
    <Layout>
      <Head>
        <title>Italian Startup Jobs</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <HeroSection />
      <JobBoard jobs={jobs} />
   </Layout>
  )};

export async function getServerSideProps() {
  let { data } = await supabase.from('jobs').select()
   
  return {
    props: {
      jobs: data
    },
  }
 };

