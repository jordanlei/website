import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Welcome, { items } from '../components/welcome';
import About from '../components/about';
import Research from '../components/research';
import Education from '../components/education';
import Experience from '../components/experience';
import Contact from '../components/contact';
import Parallax from '../components/parallax';

export default function DarkMode() {
  return (
    <Layout home className="dark">
      <Head>
        <title>{siteTitle} | Dark Mode</title>
        <meta name="theme-color" content="#0a0a0a" />
        <style>{`
          html { background-color: #0c0c0c !important; }
        `}</style>
      </Head>
      <Parallax items={items} />
      <Welcome/>
      <About/>
      <Research/>
      <Experience/>
      <Education/>
      <Contact/>
    </Layout>
  );
}
