import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import React, { Fragment } from 'react'
import Layout from '../components-re/layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </Layout>
    
  )
}

export default MyApp
