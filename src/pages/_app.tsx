import { AppProps } from 'next/app'
import Head from 'next/head'

import 'styles/tailwind.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="antialiased">
    <Head>
      <title>PEPPAPIGHS</title>
    </Head>
    <Component {...pageProps} />
  </div>
)

export default MyApp
