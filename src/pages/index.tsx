import Head from 'next/head'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Layout from '@/components/Layouts/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <>
      <Head>
        <title>Inicio | devlio.dev</title>
        <meta name='description' content='Gestión de portafolios online orientados a desarrolladores de software' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </>
  )
}
