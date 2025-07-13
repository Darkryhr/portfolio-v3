import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className='no-scrollbar' lang='en'>
      <Head />

      <body className='antialiased scroll-smooth font-display'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
