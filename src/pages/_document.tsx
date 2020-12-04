import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="th">
        <Head>
          <link
            rel="preload"
            href="/assets/fonts/Inter/Inter-roman.var.woff2?3.13"
            as="font"
            type="font/woff2"
            crossOrigin="true"
          />
          <link rel="shortcut icon" href="/favicon.png" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, user-scalable=yes"
          />
          <meta name="theme-color" content="black" />
          <meta property="og:title" content="PEPPAPIGHS" />
          <meta
            property="og:image"
            content="https://pontakorn.vercel.app/og.png"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://pontakorn.vercel.app" />
          <meta name="description" content="PEPPAPIGHS" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
