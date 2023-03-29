import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'
import SoftwareService from './SoftwareService'
import CashBot from '-!url-loader!../images/logos/CashBot.webp'
import Mobile from '-!url-loader!../images/logos/mobile.jpg'
import AI from '-!url-loader!../images/logos/data.jpg'
import Web from '-!url-loader!../images/logos/website.jpg'
import Bloc from '-!url-loader!../images/logos/blockchain.png'

const features = [
  {
    title: 'Mobile app development',
    description:
      "Android Apps(Java,Kotlin / Flutter), iOS Apps (Swift,Obj-C / flutter), Hybrid App (React Native)",
    image: Mobile ,
    sideDescription:'describe the process of mobile dev'
  },
  {
    title: 'Artificial Intelligence',
    description:
      "Conversational AI (Chatbots), Big Data Analytics, Prediction and Optimization",
    image: AI,
    sideDescription:'Data analytics- AI'
  },
  {
    title: 'Web app development',
    description:
      "Full Stack Development, UI/UX Design, Analytics and Intergration",
    image: Web,
    sideDescription:'Use JavaScript, React, PHP Laravel, Vercel to create, build, and maintaining of websites '
  },
  {
    title: 'Blockchain',
    description:
      'Protocol Development, Smart Contracts, Client Integration',
    image: Bloc,
    sideDescription:'creating the infrastructure that allows for the creation and management of blockchain-based applications and services, '
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Our Services.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
          We regard you as a strategic partner - We love what we do and are very passionate and committed to see your project fly! Let's Build Something Great. Together!
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-none py-1 px-4 lg:rounded-r-md mt-3 lg:rounded-l-md lg:p-6 bg-gradient-to-b from-blue-300 to-transparent border-b-blue-100',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5 lg:ring-1 lg:ring-inset lg:ring-white/10'
                      )}
                    >
                      <h3 className='border-none mt-2'>
                        <Tab
                          className={clsx(
                            'font-display text-lg [&:not(:focus-visible)]:focus:outline-none ',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white border-none'
                              : 'text-blue-100 hover:text-white lg:text-white rounded-none border-none'
                          )}
                        >
                          {/* <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" /> */}
                          {feature.title}
                          
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {/*{feature.description}*/}
                      </p>
                    </div>
                    <SoftwareService image={feature.image} side={feature.sideDescription} title={feature.title}/>
                    <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      {/* <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      /> */}
                      
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
