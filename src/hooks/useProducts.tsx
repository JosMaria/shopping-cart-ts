import { useContext } from 'react'
import { UseProductsContextType } from '../contexts'
import ProductsContext from '../contexts/ProductsProvider'

export const useProducts = (): UseProductsContextType => {
  return useContext(ProductsContext)
}
