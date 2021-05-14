import Head from 'next/head'

import { City } from '@modules/common/common.types'
import { Dashboard } from '@modules/dashboard'
import { Layout } from '@components/layout'

import { getSampleData } from '../sample'

interface Props {
  cities: City[]
}

export async function getStaticProps() {
  const cities = getSampleData()
  return {
    props: { cities },
  }
}

export default function Home({ cities }: Props) {
  return (
    <>
      <Head>
        <title>Weather</title>
      </Head>
      <Layout>
        <Dashboard cities={cities} />
      </Layout>
    </>
  )
}
