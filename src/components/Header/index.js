import './index.css'

const Header = ({restaurantName, cartCount}) => {
  return (
    <div className="header">
      <h1>{restaurantName}</h1>

      <div className="cart">
        <span>My Orders</span>
        <span className="count">{cartCount}</span>
      </div>
    </div>
  )
}

export default Header