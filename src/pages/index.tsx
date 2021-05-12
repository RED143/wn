import Head from 'next/head'

import { Dashboard } from '@modules/dashboard'
import { Data } from '@modules/common/common.types'
import { Layout } from '@components/layout'

import { getSampleData } from '../sample'

interface Props {
  data: Data[]
}

export async function getStaticProps() {
  const data = getSampleData()
  return {
    props: { data },
  }
}

export default function Home({ data }: Props) {
  return (
    <>
      <Head>
        <title>Weather</title>
      </Head>
      <Layout>
        <Dashboard data={data} />
      </Layout>
    </>
  )
}
