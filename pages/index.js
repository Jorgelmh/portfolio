import Header from './components/Header'
import Head from 'next/head'
import Skills from './components/Skills'
import Projects from './components/Projects'

/** 
 *  =======================
 *        HOMEPAGE
 *  =======================
*/
const Home = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>

        <script src="https://kit.fontawesome.com/b0774773ca.js" crossOrigin="anonymous"></script>

        <title>Create Next App</title>
      </Head>
      <Header />
      <Skills />
      <Projects />
    </>
  )
}

export default Home
