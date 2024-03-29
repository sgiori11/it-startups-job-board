import { supabase } from '../lib/supabaseClient';
import HeroSection from '@/components/HeroSection'
import Head from 'next/head'
import Layout from '@/components/layout';
import JobBoard from '@/components/JobBoard';
import Auth from '@/components/LoginPage';


export default function Home({ jobs }) {
  return (
    <Layout>
      <Head>
        <title>Italian Startup Jobs</title>
        <meta name="description" content="We match Italian startups and founders with Italian talent. Post a listing for free!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HeroSection />
      <Auth />
      <JobBoard jobs={jobs} />
   </Layout>
  )};

export async function getServerSideProps() {
  let { data, error } = await supabase
    .from('jobs')
    .select()
    .order('created_at', { ascending: false }); // sort by most recent
  
  if (error) {
      console.error("Error fetching jobs: ", error);
      return { props: { jobs: [] } };
   }
   
  return {
    props: {
      jobs: data
    },
  }
 };

