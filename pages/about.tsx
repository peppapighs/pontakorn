import Head from 'next/head'
import Image from 'next/image'

import { CameraIcon } from '@heroicons/react/solid'

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
        <section>
          <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8">
            <div className="mt-8 lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="relative mx-auto max-w-prose lg:col-start-3 lg:row-start-1 lg:max-w-none">
                <div className="flex flex-col items-center">
                  <Image
                    className="rounded-lg object-cover object-center shadow-lg"
                    src="/assets/portrait.jpg"
                    alt="My photo"
                    width={360}
                    height={480}
                  />
                </div>
              </div>
              <div className="col-span-2 mt-8 lg:mt-0">
                <div className="prose mx-auto text-gray-700 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                  <h2>Hello again 👋,</h2>
                  <p>
                    I&apos;m Pontakorn, or you may call me Pep. I&apos;m an
                    undergraduate student at the National University of
                    Singapore, studying Computer Science with a minor in
                    Statistics. As a full-stack software engineer intern, I
                    apply my problem-solving skills to solve practical problems
                    while while absorbing new skills and the latest
                    technologies.
                  </p>
                  <p>
                    Apart from computing, I love to play table tennis with my
                    friends and learn new piano pieces in my free time. I also
                    play some online games from time to time. Currently,
                    I&apos;m based in Singapore but originally from Nonthaburi,
                    Bangkok.
                  </p>

                  <h3>Education</h3>
                  <ul>
                    <li>
                      <h4>
                        Bachelor of Computing in Computer Science with Minor in
                        Statistics
                      </h4>
                      <p>
                        Expected Graduation Year 2025 | National University of
                        Singapore, Singapore
                      </p>
                    </li>
                  </ul>

                  <h3>Experience</h3>
                  <ul>
                    <li>
                      <h4>Full-stack Software Engineer Intern, CVWO</h4>
                      <p>May 2022 - August 2022</p>
                    </li>
                    <li>
                      <h4>
                        Teaching Assistant, National University of Singapore
                      </h4>
                      <p>January 2022 - Present</p>
                    </li>
                    <li>
                      <h4>Full-stack Software Engineer, programming.in.th</h4>
                      <p>January 2019 - Present</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default About
