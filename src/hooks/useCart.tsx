import { useContext } from "react"
import { CartContext, UseCartContextType } from "../contexts/CartProvider"

export const useCart = (): UseCartContextType => {
  return useContext(CartContext)
}
