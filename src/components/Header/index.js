
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../../context/CartContext'
import './index.css'

const Header = ({restaurantName}) => {
  const {cartList} = useContext(CartContext)

  const cartCount = cartList.reduce(
    (total, item) => total + item.quantity,
    0,
  )

  return (
    <header className="header">
      <Link to="/" className="restaurant-name">
        {restaurantName}
      </Link>

      <div className="cart">
        <Link to="/cart">My Orders</Link>
        <span className="count">{cartCount}</span>
      </div>
    </header>
  )
}

export default Header
