import { useCart } from '../hooks'

type PropsType = {
  viewCart: boolean
}

export const Footer = ({ viewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart()

  const year = new Date().getFullYear()

  const pageContent = viewCart ? (
    <p>Shopping Cart &copy; {year}</p>
  ) : (
    <>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: {totalPrice}</p>
      <p>Shopping Cart &copy; {year}</p>
    </>
  )

  return pageContent
}