import { FC } from 'react'
import Link from 'next/link'

const navigation = [
  {
    id: 1,
    name: 'Solutions',
    href: '/',
    submenu: [
      { name: 'Digital Assets Exchange', href: '/' },
      { name: 'Decentralized Exchange', href: '/' },
      { name: 'Digital and Crypto Banking', href: '/' },
      { name: 'NFT Crypto Marketplace', href: '/' },
      { name: 'Brokerage Platform', href: '/' },
      { name: 'Market Making & Liquidity', href: '/' },
      { name: 'Cryptocurrenty Custody Software', href: '/' },
    ]
  },
  {
    id: 2,
    name: 'Products',
    href: '/',
    submenu: [
      { name: 'OpenDAX', href: '/' },
      { name: 'OpenFinex', href: '/' },
      { name: 'ArkeBot', href: '/' },
    ]
  },
  {
    id: 3,
    name: 'Projects',
    href: '/',
    submenu: [
      { name: 'Peatio', href: '/' },
      { name: 'Barong', href: '/' },
      { name: 'Rango', href: '/' },
      { name: 'Community', href: '/' },
    ]
  },
  {
    id: 4,
    name: 'Resources',
    href: '/',
    submenu: [
      { name: 'Documentation', href: '/' },
      { name: 'Roadmap', href: '/' },
      { name: 'Glossary', href: '/' },
      { name: 'Webinars', href: '/' },
      { name: 'Github', href: '/' },
      { name: 'Medium Blog', href: '/' },
    ]
  },
  {
    id: 5,
    name: 'Company',
    href: '/',
    submenu: [
      { name: 'About Us', href: '/' },
      { name: 'Partners', href: '/' },
      { name: 'News', href: '/' },
      { name: 'Blog', href: '/' },
      { name: 'Team', href: '/' },
      { name: 'Careers', href: '/' },
      { name: 'Contact', href: '/' },
    ]
  },
  {
    id: 6,
    name: 'Legal',
    href: '/',
    submenu: [
      { name: 'Terms of Use', href: '/' },
      { name: 'Privacy Policy', href: '/' },
    ]
  },
]

export const Footer: FC = () => {
  return (
    <footer className='text-white bg-dark'>
      <div className='pt-16 px-4 xl:container'>
        {/* Logo */}
        <Link href='/'>
          <a className='block my-2'>
            <img className='h-5 md:h-8' src='/images/logo.svg' alt='logo' />
          </a>
        </Link>

        <div className='flex flex-col xl:flex-row'>
          {/* Contact */}
          <div className='mr-auto py-5 xl:py-7'>
            <Link href='/'>
              <a className='block py-3 hover:text-cyan duration-300'>+1 (650) 502-5022</a>
            </Link>

            <p className='text-sm leading-6 text-white text-opacity-80'>
              Openware, Inc<br />
              611 Gateway Blvd, Suite 120<br />
              South San Francisco, CA 94080,<br />
              USA
            </p>
          </div>

          {/* Navigation */}
          <div className='grid grid-cols-1 md:grid-cols-3 xl:flex'>
            {navigation.map((item) =>
              <ul className='pb-5 xl:p-7 2xl:px-12' key={item.id}>
                <li>
                  <Link href={item.href}><a className='block py-3 font-bold hover:text-cyan duration-300'>{item.name}</a></Link>
                </li>
                {item.submenu.map((el) =>
                  <li key={el.name}>
                    <Link href={el.href}><a className='block py-1 text-sm hover:text-cyan duration-300'>{el.name}</a></Link>
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className='flex'>
          <a href='/'><img className='mr-4' src='/images/footer/github-icon.svg' alt='github' /></a>
          <a href='/'><img className='mr-4' src='/images/footer/telegram-icon.svg' alt='telegram' /></a>
          <a href='/'><img className='mr-4' src='/images/footer/linkedin-icon.svg' alt='linkedin' /></a>
          <a href='/'><img className='mr-4' src='/images/footer/youtube-icon.svg' alt='youtube' /></a>
          <a href='/'><img className='mr-4' src='/images/footer/twitter-icon.svg' alt='twitter' /></a>
        </div>

        {/* Copyright */}
        <div className='pt-11 pb-9 text-center text-xs'>
          © 2021 Openware Inc., All Rights Reserved -
          <Link href='/'>
            <a className='text-cyan hover:text-white duration-300'> Cryptocurrency Exchange Software</a>
          </Link>
        </div>
      </div>
    </footer>
  )
}
