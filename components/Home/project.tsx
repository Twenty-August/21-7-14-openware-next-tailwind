import { FC } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/outline'

export const Project: FC = () => {
  return (
    <div className='bg-gray-50'>
      <div className='px-4 py-14 xl:container lg:py-20'>
        <h2 className='text-center text-2xl font-bold tracking-wide lg:text-4xl'>
          Openware Project Applications
        </h2>
        <p className='mt-2 mb-8 text-center text-xl tracking-wide lg:mb-12 lg:text-base'>
          Core open-source Blockchain applications to provision data delivery, security and automation for distributed ledger products.
        </p>

        {/* Projects */}
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-9'>
          <Link href='/'>
            <a className='block group flex items-start p-6 border border-gray-300 bg-white hover:shadow-xl duration-300'>
              <img className='w-12 h-12 mr-3' src='/images/home/peatio-icon.svg' alt='peatio' />
              <div className='flex flex-col h-full'>
                <h3 className='text-xl font-bold tracking-wide'>Peatio</h3>
                <p className='my-3'>
                  Core Accounting Software application for managing digital assets and cryptocurrencies.
                </p>
                <p className='flex items-center mt-auto font-bold text-blue'>
                  Explore Peatio
                  <ArrowRightIcon className='w-5 h-5 ml-3 transform group-hover:translate-x-1.5 duration-300' />
                </p>
              </div>
            </a>
          </Link>

          <Link href='/'>
            <a className='block group flex items-start p-6 border border-gray-300 bg-white hover:shadow-xl duration-300'>
              <img className='w-12 h-12 mr-3' src='/images/home/barong-icon.svg' alt='barong' />
              <div className='flex flex-col h-full'>
                <h3 className='text-xl font-bold tracking-wide'>Barong</h3>
                <p className='my-3'>
                  Robust Authentication Server application with KYC and 2FA support.
                </p>
                <p className='flex items-center mt-auto font-bold text-blue'>
                  Explore Barong
                  <ArrowRightIcon className='w-5 h-5 ml-3 transform group-hover:translate-x-1.5 duration-300' />
                </p>
              </div>
            </a>
          </Link>

          <Link href='/'>
            <a className='block group flex items-start p-6 border border-gray-300 bg-white hover:shadow-xl duration-300'>
              <img className='w-12 h-12 mr-3' src='/images/home/Rango-icon.svg' alt='rango' />
              <div className='flex flex-col h-full'>
                <h3 className='text-xl font-bold tracking-wide'>Rango</h3>
                <p className='my-3'>
                  High-performance WebSocket Server for real-time data updates.
                </p>
                <p className='flex items-center mt-auto font-bold text-blue'>
                  Explore Rango
                  <ArrowRightIcon className='w-5 h-5 ml-3 transform group-hover:translate-x-1.5 duration-300' />
                </p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
