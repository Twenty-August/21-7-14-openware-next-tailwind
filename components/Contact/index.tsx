import { FC } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/outline'

export const Contact: FC = () => {
  return (
    <div className='bg-gray-50'>
      <div className='px-4 py-14 xl:container lg:py-20'>
        <h2 className='mb-5 text-center text-2xl font-bold tracking-wide lg:mb-12 lg:text-4xl'>
          Who can I talk to if I have questions?
        </h2>

        <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-9'>
          <Link href='/'>
            <a className='block group flex items-start p-6 border border-gray-300 bg-white hover:shadow-xl duration-300'>
              <img className='w-9 h-9 mr-6' src='/images/home/chat-icon.svg' alt='chat' />
              <div className='flex flex-col h-full'>
                <h3 className='mb-2 text-xl font-bold tracking-wide'>
                  Chat with Sales
                </h3>
                <p className='flex items-center mt-auto font-bold text-blue'>
                  Start chat
                  <ArrowRightIcon className='w-5 h-5 ml-3 transform group-hover:translate-x-1.5 duration-300' />
                </p>
              </div>
            </a>
          </Link>

          <Link href='/'>
            <a className='block group flex items-start p-6 border border-gray-300 bg-white hover:shadow-xl duration-300'>
              <img className='w-9 h-9 mr-6' src='/images/home/call-icon.svg' alt='call' />
              <div className='flex flex-col h-full'>
                <h3 className='mb-2 text-xl font-bold tracking-wide'>
                  Call sales
                </h3>
                <p className='flex items-center mt-auto font-bold text-blue'>
                  Call now
                  <ArrowRightIcon className='w-5 h-5 ml-3 transform group-hover:translate-x-1.5 duration-300' />
                </p>
              </div>
            </a>
          </Link>

          <Link href='/'>
            <a className='block group flex items-start p-6 border border-gray-300 bg-white hover:shadow-xl duration-300'>
              <img className='w-9 h-9 mr-6' src='/images/home/contact-icon.svg' alt='contact' />
              <div className='flex flex-col h-full'>
                <h3 className='mb-2 text-xl font-bold tracking-wide'>
                  Let us contact you
                </h3>
                <p className='flex items-center mt-auto font-bold text-blue'>
                  Send a contact request
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
