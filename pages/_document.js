import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Viga&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WJGJG5X89L"></Script>
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-WJGJG5X89L');
          `}
        </Script>
        
      </body>
    </Html>
  )
}
