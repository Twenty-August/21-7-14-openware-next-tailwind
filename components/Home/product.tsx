import { FC } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/outline'

export const Product: FC = () => {
  return (
    <div className='px-4 py-14 xl:container lg:py-20'>
      <h2 className='text-center text-2xl font-bold tracking-wide lg:text-4xl'>
        Explore Openware Products
      </h2>
      <p className='mt-2 mb-8 text-center text-xl tracking-wide lg:mb-14 lg:text-base'>
        Turn your ideas into solutions with Openware Blockchain crypto exchange software.
      </p>

      {/* Producs */}
      <div className='grid grid-cols-1 gap-9 lg:grid-cols-3'>
        <Link href='/'>
          <a className='block group flex flex-col'>
            <div className='flex items-center'>
              <img src='/images/home/opendax-icon.svg' alt='opendax' />
              <h3 className='ml-4 text-2xl font-bold tracking-wide'>OpenDAX™</h3>
            </div>
            <p className='mt-6 mb-8 lg:mb-12'>
              Build a secure, modular and scalable crypto business with OpenDAX™.<br /><br />
              OpenDAX™ by Openware is a modular software stack for building crypto exchanges, NFT marketplaces, and digital banking with built-in liquidity.
            </p>
            <p className='flex items-center mt-auto font-bold text-blue'>
              Explore OpenDAX™
              <ArrowRightIcon className='w-5 h-5 ml-3 transform group-hover:translate-x-1.5 duration-300' />
            </p>
          </a>
        </Link>

        <Link href='/'>
          <a className='block group flex flex-col'>
            <div className='flex items-center'>
              <img src='/images/home/openfinex-icon.svg' alt='openfinex' />
              <h3 className='ml-4 text-2xl font-bold tracking-wide'>OpenFinex™</h3>
            </div>
            <p className='mt-6 mb-8 lg:mb-12'>
              A high-performance market platform facilitates liquid trading, market creation, and market-making on an enterprise scale.<br /><br />
              Provides you the ability to deploy new markets, engage existing markets, and seamlessly integrate external marketplaces into your own.
            </p>
            <p className='flex items-center font-bold text-blue'>
              Explore OpenFinex™
              <ArrowRightIcon className='w-5 h-5 ml-3 transform group-hover:translate-x-1.5 duration-300' />
            </p>
          </a>
        </Link>

        <Link href='/'>
          <a className='block group flex flex-col'>
            <div className='flex items-center'>
              <img src='/images/home/arkebot-icon.svg' alt='arkebot' />
              <h3 className='ml-4 text-2xl font-bold tracking-wide'>ArkeBot</h3>
            </div>
            <p className='mt-6 mb-8 lg:mb-12'>
              Open-source Machine Learning Trading Bot to facilitate automation of trading, market making, and liquidity provision.<br /><br />
              Build and run customizable trading strategies, manage risks, organize order book spread, and aggregate orders from additional sources.
            </p>
            <p className='flex items-center mt-auto font-bold text-blue'>
              Explore ArkeBot
              <ArrowRightIcon className='w-5 h-5 ml-3 transform group-hover:translate-x-1.5 duration-300' />
            </p>
          </a>
        </Link>
      </div>
    </div>
  )
}
