import { FC } from 'react'

export const Exchange: FC = () => {
  return (
    <div className='grid grid-cols-1 gap-8 px-4 py-20 xl:container lg:grid-cols-2 lg:py-36'>
      <div className=''>
        <h4 className='mb-2 text-gray-500'>
          MODULAR SCALING ARCHITECTURE
        </h4>
        <h2 className='text-3xl font-bold tracking-wide lg:text-4xl xl:text-5xl'>
          Exchange-as-a-Service SaaS.
        </h2>
        <p className='mt-2 text-xl tracking-wide lg:mt-8 lg:leading-relaxed'>
          Manage Wallets, Order Book, Authentication, and KYC services with Peatio and Barong components.<br /><br />
          Integrate any payment gateways and business-specific logic with the AppLogic component.<br /><br />
          Customize beautiful front-end with Cryptobase React library using predefined elements with the ability to develop and add your own on the fly.
        </p>
      </div>

      <div>
        <img className='mx-auto' src='/images/home/exchange.svg' alt='exchange' />
      </div>
    </div>
  )
}
