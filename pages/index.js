import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import Welcome from '../components/welcome';
import About from '../components/about';
import Research from '../components/research';
import Education from '../components/education';
import Experience from '../components/experience';
import Contact from '../components/contact';

import utilStyles from '../styles/utils.module.css';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Welcome/>
      <About/>
      <Research/>
      <Experience/>
      <Education/>
      <Contact/>
    </Layout>
  );
}