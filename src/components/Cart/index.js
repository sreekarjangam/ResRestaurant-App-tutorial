
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../../context/CartContext'
import CartItem from '../CartItem'
import './index.css'

const Cart = () => {
  const {cartList, removeAllCartItems} = useContext(CartContext)

  const totalAmount = cartList.reduce(
    (total, item) =>
      total + Number(item.dish_price) * item.quantity,
    0,
  )

  return (
    <div className="cart-container">
      <div className="cart-heading">
        <h1>My Cart</h1>
        {cartList.length > 0 && (
          <button type="button" onClick={removeAllCartItems}>
            Remove All
          </button>
        )}
      </div>

      {cartList.length === 0 ? (
        <div className="empty-cart">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
            alt="empty cart"
          />
          <h1>Your cart is empty</h1>
          <Link to="/">Order Now</Link>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {cartList.map(item => (
              <CartItem key={item.dish_id} item={item} />
            ))}
          </ul>

          <div className="cart-total">
            <h2>Order Total: {totalAmount.toFixed(2)}</h2>
            <p>{cartList.reduce((sum, item) => sum + item.quantity, 0)} Items</p>
          </div>
        </>
      )}

      <Link to="/">Back to Menu</Link>
    </div>
  )
}

export default Cart
