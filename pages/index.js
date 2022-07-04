import Header from './components/Header'
import Head from 'next/head'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import {useEffect} from 'react'
import AOS from 'aos'
import Experience from './components/Experience'

/** 
 *  =======================
 *        HOMEPAGE
 *  =======================
*/

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

const Home = () => {

  useEffect(() => {
    AOS.init()
  })
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <script src="https://kit.fontawesome.com/b0774773ca.js" crossOrigin="anonymous"></script>
        <link href={prefix + "/favicon.png"} rel="icon" sizes="48x48" />

        <title>Jorge's Portfolio - Reach me if you like what you see.</title>
      </Head>
      <Header />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer className="site-footer text-light">
        <p>Developed with ❤ by Jorge &copy; 2022</p>
      </footer>
    </>
  )
}

export default Home
