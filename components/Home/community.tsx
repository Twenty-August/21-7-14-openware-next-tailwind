import { FC } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/outline'

const apps = [
  { id: 1, name: 'DevOps', href: '/', img: '/images/home/devops-icon.svg', detail: 'DevOps open-source technologies for FinTech to provide security, maintainability, quality, and da...' },
  { id: 2, name: 'Bitcoin', href: '/', img: '/images/home/bitcoin-icon.svg', detail: 'Open-source peer-to-peer (P2P) money and the grandfather of all cryptocurrencies.' },
  { id: 3, name: 'Ethereum', href: '/', img: '/images/home/ethereum-icon.svg', detail: 'Ethereum is a global, decentralized platform for cryptocurrency and new kinds of FinTech applicat...' },
  { id: 4, name: 'Blockchain', href: '/', img: '/images/home/blockchain-icon.svg', detail: 'Blockchain is a secure decentralized digital ledger system used to store transaction records.' },
  { id: 5, name: 'Cryptography', href: '/', img: '/images/home/cryptography-icon.svg', detail: 'Cryptography converts plain text data into a secret code to provide data protection, secure commu...' },
  { id: 6, name: 'Cryptocurrency', href: '/', img: '/images/home/cryptocurrency-icon.svg', detail: 'Cryptocurrency is a decentralized digital medium of exchange regulated using cryptography.' },
]

export const Community: FC = () => {
  return (
    <div className='px-4 py-14 xl:container lg:py-20'>
      <h2 className='text-center text-2xl font-bold tracking-wide lg:text-4xl'>
        Community Project Applications
      </h2>
      <p className='mt-2 mb-8 text-center text-xl tracking-wide lg:mb-12 lg:text-base'>
        A global directory of open-source Blockchain applications and technology provision for distributed ledger products.
      </p>

      {/* Applications */}
      <div className='grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-9'>
        {apps.map((item) =>
          <Link href={item.href} key={item.id}>
            <a className='block group flex flex-col items-start p-6 bg-gray-100 lg:flex-row lg:px-9 lg:py-12'>
              <img className='w-16 h-16 mr-9 mb-1' src={item.img} alt={item.name} />
              <div className='flex flex-col h-full'>
                <h3 className='text-2xl font-bold tracking-wide'>{item.name}</h3>
                <p className='mt-2 text-gray-500'>{item.detail}</p>
              </div>
            </a>
          </Link>
        )}
      </div>

      <Link href='/'>
        <a className='group flex justify-center items-center w-40 mt-8 mx-auto text-blue lg:mb-0'>
          <p className='font-bold'>Discover more</p>
          <ArrowRightIcon className='w-5 h-5 ml-3 transform group-hover:translate-x-1.5 duration-300' />
        </a>
      </Link>
    </div>
  )
}
