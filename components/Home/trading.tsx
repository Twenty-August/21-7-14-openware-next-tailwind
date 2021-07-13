import { FC } from 'react'

export const Trading: FC = () => {
  return (
    <div className='bg-gray-50'>
      <div className='px-4 py-14 xl:container lg:py-20'>
        <h2 className='text-center text-2xl font-bold tracking-wide lg:text-4xl'>
          A Cloud-native trading platform.
        </h2>
        <img className='mt-7 mx-auto' src='/images/home/trading.svg' alt='trading' />
      </div>
    </div>
  )
}
