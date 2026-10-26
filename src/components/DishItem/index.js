
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import './index.css'

const DishItem = ({dish}) => {
  const {
    cartList,
    addCartItem,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
  } = useContext(CartContext)

  const cartItem = cartList.find(
    item => item.dish_id === dish.dish_id,
  )

  const count = cartItem ? cartItem.quantity : 0

  const add = () => {
    if (count === 0) {
      addCartItem(dish)
    } else {
      incrementCartItemQuantity(dish.dish_id)
    }
  }

  const remove = () => {
    if (count > 0) {
      decrementCartItemQuantity(dish.dish_id)
    }
  }

  return (
    <li className="dish">
      <div className="dish-details">
        <h1>{dish.dish_name}</h1>
        <p>
          {dish.dish_currency} {dish.dish_price}
        </p>
        <p>{dish.dish_description}</p>
        <p>{dish.dish_calories} calories</p>

        {dish.dish_Availability === false ? (
          <p>Not available</p>
        ) : (
          <div className="counter">
            <button type="button" onClick={remove}>
              -
            </button>
            <span>{count}</span>
            <button type="button" onClick={add}>
              +
            </button>
          </div>
        )}

        {dish.addonCat?.length > 0 && (
          <p>Customizations available</p>
        )}
      </div>

      <img src={dish.dish_image} alt={dish.dish_name} />
    </li>
  )
}

export default DishItem
