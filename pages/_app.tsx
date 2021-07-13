import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'
import type { AppProps } from 'next/app'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  function getLibrary(provider: any): Web3Provider {
    return new Web3Provider(provider)
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  )
}
export default MyApp
