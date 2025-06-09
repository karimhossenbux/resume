import Head from 'next/head';
import DarkMode from '../components/DarkMode';
import About from '../components/About';
import HighlightedSkills from '../components/HighlightedSkills';
import Educations from '../components/Educations';
import Languages from '../components/Languages';
import Interests from '../components/Interests';
import Footer from '../components/Footer';
import { getResume } from '../utils/resume';

export default function Home() {
  const resume = getResume();

  return (
    <div className="relative">
      <DarkMode />

      <div className="container mx-auto p-4 print:px-1 subpixel-antialiased">
        <Head>
          <title>Resume</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="mb-12">
          <About info={resume.basics} />
          <HighlightedSkills skills={resume.skills} works={resume.work} />
          <Educations items={resume.education} />
          <Languages items={resume.languages} />
          <Interests items={resume.interests} />
        </main>

        <Footer />
      </div>
    </div>
  );
}
