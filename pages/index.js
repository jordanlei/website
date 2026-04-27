import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Welcome, { items } from '../components/welcome';
import About from '../components/about';
import Research from '../components/research';
import Education from '../components/education';
import Experience from '../components/experience';
import Contact from '../components/contact';
import Parallax from '../components/parallax';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Parallax items={items} />
      <Welcome />
      <About />
      <Research />
      <Experience />
      <Education />
      <Contact />
    </Layout>
  );
}