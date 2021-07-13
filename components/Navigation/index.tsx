import { FC, useState, useEffect, useReducer } from 'react'
import Link from 'next/link'
import { MenuIcon, XIcon, ChevronDownIcon } from '@heroicons/react/outline'
import styles from './Navigation.module.scss'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

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
]

export const Navigation: FC = () => {
  const screenSize = useWindowSize();
  const [showMenu, toggleMenu] = useReducer(state => !state, false)

  return (
    <header className='font-bold text-white bg-dark'>
      <div className='flex items-center h-16 px-4 xl:container xl:h-14'>
        {/* Logo and Hamburger */}
        <div className='flex-shrink-0 fixed z-10 top-0 left-0 flex justify-between items-center w-full p-4 border-b border-opacity-10 bg-dark xl:static xl:w-auto xl:p-0 xl:border-0'>
          <Link href='/'>
            <a className='block mt-1 mr-8'>
              <img className='h-7 xl:h-6' src='/images/logo.svg' alt='logo' />
            </a>
          </Link>

          <a className='cursor-pointer xl:hidden' onClick={toggleMenu}>
            {showMenu ? <XIcon className='w-8 h-8' /> : <MenuIcon className='w-8 h-8' />}
          </a>
        </div>

        {(showMenu || screenSize.width > 1280) &&
          <div className={styles.nav_right}>
            {/* Contact */}
            <div className='flex items-center mb-3 px-4 py-3 border-b border-opacity-10 xl:ml-auto xl:mb-0 xl:p-0 xl:border-0'>
              <div className='mr-auto'>
                <Link href='/'>
                  <a className='flex items-center'>
                    <img className='mr-2 xl:hidden' src='/images/navbar/phone-icon.svg' alt='phone' />
                    <span className='mr-4 text-sm font-normal hover:text-cyan duration-300 xl:text-base'>+1 (650) 502-5022</span>
                  </a>
                </Link>

                <Link href='/'>
                  <a className='flex items-center mt-1 xl:hidden'>
                    <img className='mr-2' src='/images/navbar/mail-icon.svg' alt='mail' />
                    <span className='text-sm font-normal hover:text-cyan duration-300'>hello@openware.com</span>
                  </a>
                </Link>
              </div>

              <Link href='/'>
                <a className='block p-2 font-semibold text-dark bg-cyan hover:bg-white duration-300 xl:px-4'>Get Pricing</a>
              </Link>
            </div>

            {/* Navigation */}
            <ul className='flex-grow flex flex-col xl:flex-row'>
              {navigation.map((item) =>
                <li className='group' key={item.id}>
                  <Link href={item.href}>
                    <a className='block px-4 py-3 group-hover:text-cyan duration-300'>
                      <span className='mr-1 text-2xl tracking-wide xl:text-base'>{item.name}</span>
                      <ChevronDownIcon className='hidden w-4 transform group-hover:-rotate-180 duration-300 xl:inline-block' />
                    </a>
                  </Link>

                  <ul className='mb-4 xl:hidden xl:group-hover:block xl:absolute xl:text-dark xl:bg-white xl:shadow-md'>
                    {item.submenu.map((el) =>
                      <li key={el.name}>
                        <Link href={el.href}>
                          <a className='block px-4 py-2 hover:text-cyan duration-300 xl:px-3 xl:text-sm xl:font-normal xl:hover:text-dark xl:hover:bg-gray-200'>
                            {el.name}
                          </a>
                        </Link>
                      </li>
                    )}
                  </ul>
                </li>
              )}
            </ul>
          </div>
        }
      </div>
    </header>
  )
}
