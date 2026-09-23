import {useEffect, useState} from 'react'
import Header from './components/Header'
import CategoryTabs from './components/CategoryTabs'
import DishList from './components/DishList'
import './App.css'

const App = () => {
  const [restaurantName, setRestaurantName] = useState('')
  const [menu, setMenu] = useState([])
  const [activeCategory, setActiveCategory] = useState('')
  const [dishes, setDishes] = useState([])
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const getRestaurantData = async () => {
      const response = await fetch(
        'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
      )

      const data = await response.json()

      // Restaurant name from API key
      setRestaurantName(data[0].restaurant_name)

      // Menu categories from API key
      const menuList = data[0].table_menu_list
      setMenu(menuList)

      // First category
      if (menuList.length > 0) {
        setActiveCategory(menuList[0].menu_category)
        setDishes(menuList[0].category_dishes)
      }
    }

    getRestaurantData()
  }, [])

  const changeCategory = category => {
    setActiveCategory(category)

    const selectedCategory = menu.find(
      item => item.menu_category === category,
    )

    if (selectedCategory) {
      setDishes(selectedCategory.category_dishes)
    }
  }

  const updateCart = value => {
    setCartCount(prevCount => Math.max(prevCount + value, 0))
  }

  return (
    <div>
      <Header
        restaurantName={restaurantName}
        cartCount={cartCount}
      />

      <CategoryTabs
        menu={menu}
        setActive={changeCategory}
      />

      <DishList
        dishes={dishes}
        updateCart={updateCart}
      />
    </div>
  )
}

export default App