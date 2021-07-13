import { FC } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/outline'

export const Intro: FC = () => {
  return (
    <div className='bg-intro bg-center bg-no-repeat bg-cover'>
      <div className='px-4 pt-16 pb-32 xl:container lg:py-40'>
        <h1 className='text-3xl font-bold tracking-wide text-white lg:text-5xl'>
          Crypto Exchange Foundry.
        </h1>
        <h2 className='max-w-4xl my-4 text-lg font-bold tracking-wide text-cyan lg:mt-8 lg:text-2xl'>
          Openware builds next-gen blockchain infrastructures and leads the development of innovative Fintech projects.
        </h2>

        <div className='grid grid-cols-1 gap-6 my-12 lg:grid-cols-2'>
          <Link href='/'>
            <a className='block group px-9 py-6 bg-white shadow-xl hover:shadow-2xl duration-300'>
              <div className='flex items-center'>
                <img className='mr-3' src='/images/home/bag-icon.svg' alt='bag' />
                <h3 className='text-2xl font-bold tracking-wide'>Enterprise</h3>
              </div>
              <p className='mt-5 mb-4 leading-7'>
                See how Openware can help you establish new business models, conquer new crypto markets, and secure a digital future for your business.
              </p>
              <div className='flex items-center mb-1'>
                <p className='font-bold'>Openware for Enterprise</p>
                <ArrowRightIcon className='w-5 h-5 ml-3 transform group-hover:translate-x-1.5 duration-300' />
              </div>
            </a>
          </Link>

          <Link href='/'>
            <a className='block group px-9 py-6 bg-cyan shadow-xl hover:shadow-2xl duration-300'>
              <div className='flex items-center'>
                <img className='mr-3' src='/images/home/tag-icon.svg' alt='tag' />
                <h3 className='text-2xl font-bold tracking-wide'>Developers</h3>
              </div>
              <p className='mt-5 mb-4 leading-7'>
                See how Openware can help you establish new business models, conquer new crypto markets, and secure a digital future for your business.
              </p>
              <div className='flex items-center mb-1'>
                <p className='font-bold'>Openware for Enterprise</p>
                <ArrowRightIcon className='w-5 h-5 ml-3 transform group-hover:translate-x-1.5 duration-300' />
              </div>
            </a>
          </Link>
        </div>

        <p className='mb-4 text-xl tracking-wide text-white'>
          We develop & support OpenDAX™ modular platform for building cryptocurrency exchanges, NFT marketplaces, and digital banking with built-in crypto liquidity, powered by XLN.
        </p>
      </div>
    </div>
  )
}
