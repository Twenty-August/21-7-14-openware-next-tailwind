import { FC } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/outline'

export const Blog: FC = () => {
  return (
    <div className='-mt-20 px-4 xl:container'>
      {/* Blogs */}
      <div className='grid grid-cols-1 gap-2 lg:grid-cols-3'>
        <Link href='/'>
          <a className='block px-6 py-9 bg-white shadow-xl hover:shadow-2xl duration-300'>
            <h4 className='text-sm text-gray-500'>OPENWARE IN MEDIA</h4>
            <p className='mt-3 mb-4 font-bold'>How do I create a Cryptocurrency Exchange...</p>
            <span className='font-bold text-blue'>Read more</span>
          </a>
        </Link>

        <Link href='/'>
          <a className='block px-6 py-9 bg-white shadow-xl hover:shadow-2xl duration-300'>
            <h4 className='text-sm text-gray-500'>OPENWARE IN MEDIA</h4>
            <p className='mt-3 mb-4 font-bold'>How do I start a cryptocurrency business?</p>
            <span className='font-bold text-blue'>Read more</span>
          </a>
        </Link>

        <Link href='/'>
          <a className='block px-6 py-9 bg-white shadow-xl hover:shadow-2xl duration-300'>
            <h4 className='text-sm text-gray-500'>OPENWARE IN MEDIA</h4>
            <p className='mt-3 mb-4 font-bold'>How does a cryptocurrency exchange work?</p>
            <span className='font-bold text-blue'>Read more</span>
          </a>
        </Link>
      </div>

      <Link href='/'>
        <a className='group flex justify-center items-center w-40 mt-8 mb-3 mx-auto lg:mb-0'>
          <p className='font-bold'>Openware News</p>
          <ArrowRightIcon className='w-5 h-5 ml-3 transform group-hover:translate-x-1.5 duration-300' />
        </a>
      </Link>

      {/* Logos */}
      <div className='grid grid-cols-3 lg:flex justify-between items-center flex-wrap mb-2'>
        <Link href='/'>
          <a className='flex justify-center items-center m-5'>
            <img src='/images/home/google-logo.svg' alt='google' />
          </a>
        </Link>

        <Link href='/'>
          <a className='flex justify-center items-center m-5'>
            <img src='/images/home/aws-logo.svg' alt='aws' />
          </a>
        </Link>

        <Link href='/'>
          <a className='flex justify-center items-center m-5'>
            <img src='/images/home/azure-logo.svg' alt='azure' />
          </a>
        </Link>

        <Link href='/'>
          <a className='flex justify-center items-center m-5'>
            <img src='/images/home/docker-logo.svg' alt='docker' />
          </a>
        </Link>

        <Link href='/'>
          <a className='flex justify-center items-center m-5'>
            <img src='/images/home/kuber-logo.svg' alt='kuber' />
          </a>
        </Link>
      </div>
    </div>
  )
}
