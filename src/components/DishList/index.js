
import DishItem from '../DishItem'

const DishList = ({dishes}) => (
  <ul className="dish-list">
    {dishes.map(dish => (
      <DishItem key={dish.dish_id} dish={dish} />
    ))}
  </ul>
)

export default DishList
