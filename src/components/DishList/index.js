import DishItem from '../DishItem'

const DishList = ({dishes, updateCart}) => {
  return (
    <ul>
      {dishes.map(dish => (
        <DishItem
          key={dish.dish_id}
          dish={dish}
          updateCart={updateCart}
        />
      ))}
    </ul>
  )
}

export default DishList
