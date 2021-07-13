import { FC } from 'react'
import Link from 'next/link'

export const Info: FC = () => {
  return (
    <div className='text-center text-white bg-dark'>
      <div className='px-4 py-20 xl:container'>
        <div className='grid grid-cols-1 divide-y-2 divide-cyan lg:grid-cols-2 lg:divide-x-2 lg:divide-y-0'>
          <div>
            <div className='mb-9 lg:mb-0 lg:mr-10 xl:mr-20'>
              <h2 className='text-3xl font-bold tracking-wide lg:text-4xl xl:text-5xl xl:leading-tight'>
                Cutting-edge <br className='hidden xl:block' />
                technology.
              </h2>
              <p className='mt-8 mb-4'>
                You&apos;ve probably already used dozens of the applications built with our application stack and framework - AirBNB, Shopify, SoundCloud, Twitch, GitHub, Zendesk, and hundreds of thousands of others.
              </p>
              <div className='flex flex-wrap justify-center items-center'>
                <Link href='/'>
                  <a className='block m-5 xl:mx-7 2xl:mx-10'>
                    <img className='w-28 h-20' src='/images/home/go-logo-white.svg' alt='go' />
                  </a>
                </Link>

                <Link href='/'>
                  <a className='block m-5 xl:mx-7 2xl:mx-10'>
                    <img className='w-28 h-10' src='/images/home/react-logo-white.svg' alt='react' />
                  </a>
                </Link>

                <Link href='/'>
                  <a className='block m-5 xl:mx-7 2xl:mx-10'>
                    <img className='w-20 h-14' src='/images/home/mysql-logo-white.svg' alt='mysql' />
                  </a>
                </Link>

                <Link href='/'>
                  <a className='block m-5 xl:mx-7 2xl:mx-10'>
                    <img className='w-28 h-12' src='/images/home/ruby-logo-white.svg' alt='ruby' />
                  </a>
                </Link>

                <Link href='/'>
                  <a className='block m-5 xl:mx-7 2xl:mx-10'>
                    <img className='w-28 h-9' src='/images/home/redis-logo-white.svg' alt='redis' />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className='mt-16 lg:mt-0 lg:ml-10 xl:ml-20'>
              <h2 className='text-3xl font-bold tracking-wide lg:text-4xl xl:text-5xl xl:leading-tight'>
                Self-healing planet-scale cloud.
              </h2>
              <p className='mt-8 mb-4'>
                We design crypto exchange cloud solutions on the same principles that allow Google, Amazon, and Microsoft to run billions of cloud containers every day safely.
              </p>
              <div className='flex flex-wrap justify-center items-center mt-16'>
                <Link href='/'>
                  <a className='block m-5 xl:mx-7 2xl:mx-10'>
                    <img className='w-44 h-8' src='/images/home/google-logo-white.svg' alt='google' />
                  </a>
                </Link>

                <Link href='/'>
                  <a className='block m-5 xl:mx-7 2xl:mx-10'>
                    <img className='w-15 h-9' src='/images/home/aws-logo-white.svg' alt='aws' />
                  </a>
                </Link>

                <Link href='/'>
                  <a className='block m-5 xl:mx-7 2xl:mx-10'>
                    <img className='w-28 h-8' src='/images/home/azure-logo-white.svg' alt='azure' />
                  </a>
                </Link>

                <Link href='/'>
                  <a className='block m-5 xl:mx-7 2xl:mx-10'>
                    <img className='w-28 h-7' src='/images/home/docker-logo-white.svg' alt='docker' />
                  </a>
                </Link>

                <Link href='/'>
                  <a className='block m-5 xl:mx-7 2xl:mx-10'>
                    <img className='w-44 h-7' src='/images/home/kuber-logo-white.svg' alt='kuber' />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
