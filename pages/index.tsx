import { FC } from 'react'
import Head from 'next/head'
import { Layout, Intro, Blog, Product, Project, Community, Infra, Info, Config, Trading, Exchange } from '../components'

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Openware</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Intro />
        <Blog />
        <Product />
        <Project />
        <Community />
        <Infra />
        <Info />
        <Config />
        <Trading />
        <Exchange />
      </Layout>
    </>
  )
}

export default Home
