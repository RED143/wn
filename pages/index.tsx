import Head from 'next/head'

import { Layout } from '@/components/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather</title>
      </Head>
      <Layout>
        <p>weather app</p>
      </Layout>
    </>
  )
}
