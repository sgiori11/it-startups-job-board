import Layout from '../../components/Layout';
import { supabase } from '../../lib/supabaseClient';
import slugify from 'slugify';


export default function JobPost({ job }) {
  return (
    <Layout>
        <h1>{job.job_title}</h1>

    </Layout>
)}

export async function getStaticPaths() {
    // Return a list of possible value for id
    let { data } = await supabase.from('jobs').select('id');

    let paths = data.map((job) => ({
        params: {
            id: job.id.toString(), 
        },
    }));

    return {
        paths,
        fallback: false,
    };
  }


export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    let { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('id', params.id)
        .single();

    if (error) {
        console.error(error);
        return {
            notFound: true,
        };
    }

    return {
        props: {
            job: data,
        },
    };
  }