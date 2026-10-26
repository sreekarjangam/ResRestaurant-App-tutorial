
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import './index.css'

const CartItem = ({item}) => {
  const {
    incrementCartItemQuantity,
    decrementCartItemQuantity,
    removeCartItem,
  } = useContext(CartContext)

  return (
    <li className="cart-item">
      <img src={item.dish_image} alt={item.dish_name} />

      <div className="cart-item-details">
        <h2>{item.dish_name}</h2>
        <p>
          {item.dish_currency} {item.dish_price}
        </p>

        <div className="counter">
          <button
            type="button"
            onClick={() => decrementCartItemQuantity(item.dish_id)}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            type="button"
            onClick={() => incrementCartItemQuantity(item.dish_id)}
          >
            +
          </button>
        </div>

        <p>
          Subtotal:{' '}
          {(
            Number(item.dish_price) * item.quantity
          ).toFixed(2)}
        </p>

        <button
          type="button"
          onClick={() => removeCartItem(item.dish_id)}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default CartItem
