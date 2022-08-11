import Head from 'next/head'

import Layout from 'components/Layout'
import Navbar from 'components/Navbar'

const Home = () => {
  return (
    <>
      <Head>
        <title>Pontakorn | Software Engineer</title>
      </Head>
      <Layout>
        <section className="flex min-h-screen flex-col bg-gray-900">
          <Navbar />
          <div className="mx-auto -mt-16 flex max-w-5xl flex-1 flex-col justify-center py-24 px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-400 sm:text-3xl">
              Hi there 👋,
            </h2>
            <h1 className="text-3xl font-bold text-gray-100 sm:text-5xl">
              I&apos;m <span className="inline text-blue-300">Pontakorn</span>,
              a CS undergrad who is passionate about algorithm.
            </h1>
            <h2 className="mt-12 text-lg font-bold text-gray-400 sm:text-2xl">
              Currently studying @ NUS
            </h2>
            <h2 className="text-lg font-bold text-gray-400 sm:text-2xl">
              Previously a full-stack software engineer intern @{' '}
              <a
                href="https://www.comp.nus.edu.sg/~vwo/"
                target="_blank"
                rel="noreferrer"
                className="inline hover:underline"
              >
                CVWO
              </a>
            </h2>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Home
