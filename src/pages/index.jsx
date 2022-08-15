import Head from 'next/head'
import favicon from '-!url-loader!../images/logos/favicon.png'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import Vidz from '@/components/Vidz'

export default function Home() {
  return (
    <>
      <Head>
        <title>MobiSoft - Innovation Accelerator</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta name="keywords" content="Artificial Intelligence, Block Chain, Machine Learning, Web Development, Mobile Development, iOS, Android, Project Management"/>
        <meta name="author" content="MobiSoft Private Limited"></meta>
        <link rel="icon" type="image/png" sizes="32x32" href={favicon}></link>
        <meta
          name="description"
          content="A software development company of highly committed software engineers with a solid and proven track record of developing and delivering winning products to market"
        />
      </Head>
      <Header  />
      <Vidz/>
      <main className='bg-slate-50'>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        {/* <CallToAction /> */}
        <Testimonials />
        <Pricing />
        {/* <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
