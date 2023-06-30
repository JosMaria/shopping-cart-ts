import { CartItemType, ReducerAction, ReducerActionType } from '../contexts'

type PropsType = {
  item: CartItemType
  dispatch: React.Dispatch<ReducerAction>
  REDUCER_ACTIONS: ReducerActionType
}

export const CartLineItem = ({ item, dispatch, REDUCER_ACTIONS }: PropsType) => {
  const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url).href
  const lineTotal = item.qty * item.price
  const highestQty = 20 > item.qty ? 20 : item.qty
  const optionsValues = [...Array(highestQty).keys()].map(i => i + 1)

  const options = optionsValues.map(val =>
    <option key={`opt${val}`} value={val}>
      {val}
    </option>
  )

  const onChangeQty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, qty: Number(e.target.value) }
    })
  }

  const onRemoveFromCart = () => dispatch({
    type: REDUCER_ACTIONS.REMOVE,
    payload: item
  })

  const content =
    <li className='cart__item'>
      <img src={img} alt={item.name} className='cart__img' />
      <div aria-label='Item name'>{item.name}</div>
      <div aria-label='Price Per Item'>
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.price)}
      </div>
      <label htmlFor='itemQty' className='offscreen'>
        Item Quantity
      </label>
      <select
        name='itemQty'
        id='itemQty'
        className='cart__select'
        value={item.qty}
        aria-label='Item Quantity'
        onChange={onChangeQty}
      >
        {options}
      </select>
      <div className='cart__item.subtotal' aria-label='Line Item Total'>
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lineTotal)}
      </div>
      <button
        className='cart__button'
        aria-label='Remove Item From Cart'
        title='Remove Item From Cart'
        onClick={onRemoveFromCart}
      >
        X
      </button>
    </li>

  return content
}
