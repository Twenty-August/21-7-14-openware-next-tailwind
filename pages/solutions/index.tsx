import { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ChevronRightIcon, ArrowRightIcon } from '@heroicons/react/outline'

import { Layout } from '../../components'

const solutions = [
  {
    id: 1,
    name: 'OpenDAX',
    href: '/',
    img: '/images/solutions/opendax-icon.svg',
    title: 'Cryptocurrency Exchange Software',
    detail: [
      'Manage the centralized trading of blockchain-based digital assets, cryptocurrencies, and security tokens.',
      'Open-source cryptocurrency exchange platform software providing a fully-featured solution to meet the ever-increasing demands of the FinTech industry and alternative marketplaces.',
    ]
  },
  {
    id: 2,
    name: 'OpenDEX',
    href: '/',
    img: '/images/solutions/opendex-icon.svg',
    title: 'Decentralized Exchange Software',
    detail: [
      'Operate modern peer-to-peer exchange of digital assets, cryptocurrencies, and security tokens driven by community liquidity pools.',
      'The inventive solution to deploy a new-fashioned Uniswap-based cloud platform-as-a-service (PaaS).',
    ]
  },
  {
    id: 3,
    name: 'OpenBank',
    href: '/',
    img: '/images/solutions/openbank-icon.svg',
    title: 'Digital and Crypto Banking',
    detail: [
      'Conquer the banking market with innovative financial products, empowered by Blockchain technology.',
      'Take advantage of the new wave of distributed ledger applications, enabling new currencies, ensuring frictionless usage experience, customer trust, and regulatory compliance.',
    ]
  },
  {
    id: 4,
    name: 'OpenNFT',
    href: '/',
    img: '/images/solutions/opennft-icon.svg',
    title: 'NFT Crypto Marketplace',
    detail: [
      'Operate the next-generation crypto marketplace to facilitate the trading of any digital assets and collectibles, represented by popular NFT tokens.',
      'OpenNFT SaaS is the perfect Blockchain software engine to power up your decentralized NFT digital assets marketplace.',
    ]
  },
  {
    id: 5,
    name: 'OpenBroker',
    href: '/',
    img: '/images/solutions/openbroker-icon.svg',
    title: 'Brokerage Platform Software',
    detail: [
      'Future-proof trading platform to facilitate smart investments and financial management powered by Blockchain technology.',
      'The next-generation brokerage platform combines easy access to common stock market assets and a new breed of digital cryptocurrency assets.',
    ]
  },
  {
    id: 6,
    name: 'ArkeBot',
    href: '/',
    img: '/images/solutions/arkebot-icon.svg',
    title: 'Market Making & Liquidity Provision',
    detail: [
      'Automate your trading strategies, perform successful market-making, and provide liquidity for your cryptocurrency exchange.',
      'Employ proprietary technology and algorithms with proper risk management, empowered by machine learning.',
    ]
  },
  {
    id: 7,
    name: 'OpenWallet',
    href: '/',
    img: '/images/solutions/openwallet-icon.svg',
    title: 'Cryptocurrency Custody Software',
    detail: [
      "Provide mobile and desktop wallet applications to send, receive, and safely store your customers' digital assets.",
      'We develop enterprise software solutions to manage digital assets and provide crypto custody.',
    ]
  },
]

const Solutions: FC = () => {
  return (
    <>
      <Head>
        <title>Solutions</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        {/* Breadcrumb */}
        <div className='border-b border-gray-300'>
          <div className='flex items-center px-4 py-3.5 xl:container'>
            <Link href='/home'>
              <a className='font-bold hover:text-cyan duration-300'>Home</a>
            </Link>
            <ChevronRightIcon className='inline-block w-4 h-4 mx-0.5' />
            <Link href='/solutions'>
              <a className='font-bold hover:text-cyan duration-300'>Solutions</a>
            </Link>
          </div>
        </div>

        <div className='px-4 pt-12 pb-32 text-center xl:container lg:pb-48'>
          <h1 className='text-3xl font-bold tracking-wide lg:text-5xl'>
            Blockchain Software Solutions
          </h1>
          <p className='mt-6 mb-8'>
            We help companies build secure, efficient, and scaling enterprise solutions with innovative distributed ledger technologies.
          </p>

          {/* Blockchain Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-3 md:gap-y-9 xl:gap-x-9'>
            {solutions.map((item) =>
              <Link href={item.href} key={item.id}>
                <a className='block group flex flex-col border border-gray-300 hover:shadow-xl duration-300'>
                  <div className='flex flex-col items-center pt-9 pb-6 px-5 md:px-10 md:pt-10 md:pb-9'>
                    <img className='w-16 h-16' src={item.img} alt={item.name} />
                    <h2 className='my-3 text-2xl font-bold tracking-wide md:my-5'>{item.title}</h2>
                    <p className='mb-4'>
                      {item.detail[0]}
                    </p>
                    <p>
                      {item.detail[1]}
                    </p>
                  </div>

                  <div className='mt-auto flex justify-center items-center py-4 border-t border-gray-300 font-bold text-blue'>
                    Explore {item.name}
                    <ArrowRightIcon className='w-5 h-5 ml-3 transform group-hover:translate-x-1.5 duration-300' />
                  </div>
                </a>
              </Link>
            )}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Solutions
