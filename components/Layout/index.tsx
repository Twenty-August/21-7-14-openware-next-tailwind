import { FC } from 'react'
import { Navigation, Footer, Contact } from '..'

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Navigation />
      <div>
        {children}
      </div>
      <Contact />
      <Footer />
    </>
  )
}
