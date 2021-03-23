import Head from 'next/head'
import DarkMode from '../components/DarkMode'
import About from '../components/About'
import Work from '../components/Work'
import Skills from '../components/Skills'
import Educations from '../components/Educations'
import Languages from '../components/Languages'
import Interests from '../components/Interests'
import Footer from '../components/Footer'
import { getResume } from '../utils/resume'

export default function Home() {
  const resume = getResume()

  return (
    <div className="relative">
      <DarkMode />

      <div className="container mx-auto p-4 subpixel-antialiased">
        <Head>
          <title>Resume</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="mb-12">
          <About info={resume.basics} />
          <Skills items={resume.skills} />
          <Work items={resume.work} />
          <Educations items={resume.education} />
          <Languages items={resume.languages} />
          <Interests items={resume.interests} />
        </main>

        <Footer />
      </div>
    </div>
  )
}
