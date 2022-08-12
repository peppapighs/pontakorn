import Head from 'next/head'

import Layout from 'components/Layout'
import Navbar from 'components/Navbar'

const About = () => {
  return (
    <>
      <Head>
        <title>Pontakorn | About</title>
      </Head>
      <Layout>
        <Navbar />
      </Layout>
    </>
  )
}

export default About
