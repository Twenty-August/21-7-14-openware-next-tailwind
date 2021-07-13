import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

export const injectedConnector = new InjectedConnector({})
export const walletConnectConnector = new WalletConnectConnector({
  rpc: { 1: '...' }, // Alchemy or infura api
})
