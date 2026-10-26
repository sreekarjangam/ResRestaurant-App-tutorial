
import React, {useState} from 'react'

export const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  removeAllCartItems: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

const CartProvider = ({children}) => {
  const [cartList, setCartList] = useState([])

  // Add a dish to the cart
  const addCartItem = dish => {
    setCartList(prevCartList => {
      const isAlreadyAdded = prevCartList.some(
        item => item.dish_id === dish.dish_id,
      )

      if (isAlreadyAdded) {
        return prevCartList
      }

      return [...prevCartList, {...dish, quantity: 1}]
    })
  }

  // Clear all cart items
  const removeAllCartItems = () => {
    setCartList([])
  }

  // Remove a particular dish from the cart
  const removeCartItem = dishId => {
    setCartList(prevCartList =>
      prevCartList.filter(item => item.dish_id !== dishId),
    )
  }

  // Increase the quantity of a dish
  const incrementCartItemQuantity = dishId => {
    setCartList(prevCartList =>
      prevCartList.map(item => {
        if (item.dish_id === dishId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }

        return item
      }),
    )
  }

  // Decrease the quantity and remove the dish at zero
  const decrementCartItemQuantity = dishId => {
    setCartList(prevCartList =>
      prevCartList
        .map(item => {
          if (item.dish_id === dishId) {
            return {
              ...item,
              quantity: item.quantity - 1,
            }
          }

          return item
        })
        .filter(item => item.quantity > 0),
    )
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCartItem,
        removeAllCartItems,
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
