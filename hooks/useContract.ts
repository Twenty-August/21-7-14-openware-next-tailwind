import { Contract, ContractInterface } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { useMemo } from 'react'

export default function useContract<T extends Contract>(
  address: string,
  abi: ContractInterface,
  key?: string,
): T | null {
  const { library } = useWeb3React<Web3Provider>(key)

  return useMemo(() => {
    if (!library) return null
    return new Contract(address, abi, library) as T
  }, [library, address, abi])
}
