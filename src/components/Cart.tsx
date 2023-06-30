import { useState } from 'react'
import { useCart } from '../hooks'
import MemoizedCartLineItem from './CartLineItem'

export const Cart = () => {
  const [confirm, setConfirm] = useState(false)
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart()

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT })
    setConfirm(true)
  }

  const pageContent = confirm ? (
    <h2>Thank you for you order.</h2>
  ) : (
    <>
      <h2 className='offscreen'>Cart</h2>
      <ul className='cart'>
        {cart.map(item => (
          <MemoizedCartLineItem
            key={item.sku}
            item={item}
            dispatch={dispatch}
            REDUCER_ACTIONS={REDUCER_ACTIONS}
          />
        ))}
      </ul>
      <div className='cart__totals'>
        <p>Total items: {totalItems}</p>
        <p>Total price: {totalPrice}</p>
        <button className='cart__submit' disabled={!totalItems} onClick={onSubmitOrder}>
          Place Order
        </button>
      </div>
    </>
  )

  const content =
    <main className='main main--cart'>
      {pageContent}
    </main>

  return content
}
