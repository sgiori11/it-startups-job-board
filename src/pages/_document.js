import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Merriweather:wght@400;900&display=swap" rel="stylesheet"></link>
     </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
