import {useState} from 'react'
import './index.css'

const DishItem = ({dish, updateCart}) => {
  const [count, setCount] = useState(0)

  const add = () => {
    setCount(prev => prev + 1)
    updateCart(1)
  }
const remove = () => {
  if (count > 0) {
    setCount(prevCount => prevCount - 1)
    updateCart(-1)
  }
}


  return (
    <li className="dish">
      <div>
        <h1>{dish.dish_name}</h1>

        <p>
          {dish.dish_currency} {dish.dish_price}
        </p>

        <p>{dish.dish_description}</p>

        <p>{dish.dish_calories} calories</p>

     {dish.dish_Availability === false ? (
  <p className="not">Not available</p>
) : (
  <div className="counter">
    <button type="button" onClick={remove}>
      -
    </button>

    <p>{count}</p>

    <button type="button" onClick={add}>
      +
    </button>
  </div>
)}

        {dish.addonCat && dish.addonCat.length > 0 && (
          <p>Customizations available</p>
        )}
      </div>

      <img src={dish.dish_image} alt={dish.dish_name} />
    </li>
  )
}

export default DishItem
