import {useEffect, useState} from 'react'
import Header from '../Header'
import CategoryTabs from '../CategoryTabs'
import DishList from '../DishList'

const Home = () => {
  const [restaurantData, setRestaurantData] = useState(null)
  const [activeCategory, setActiveCategory] = useState('')

  useEffect(() => {
    const getRestaurantData = async () => {
      try {
        const response = await fetch(
          'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
        )

        if (!response.ok) {
          throw new Error('Failed to fetch restaurant data')
        }

        const data = await response.json()
        const restaurant = Array.isArray(data) ? data[0] : data

        setRestaurantData(restaurant)

        const menuList = restaurant?.table_menu_list || []

        if (menuList.length > 0) {
          setActiveCategory(menuList[0].menu_category)
        }
      } catch (error) {
        console.error('Error fetching restaurant data:', error)
      }
    }

    getRestaurantData()
  }, [])

  if (restaurantData === null) {
    return <p>Loading...</p>
  }

  const restaurant = Array.isArray(restaurantData)
    ? restaurantData[0]
    : restaurantData

  const tableMenuList = restaurant?.table_menu_list || []

  const dishes =
    tableMenuList.find(item => item.menu_category === activeCategory)
      ?.category_dishes || []

  return (
    <div>
      <Header restaurantName={restaurant?.restaurant_name || ''} />
      <CategoryTabs
        categories={tableMenuList}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <DishList dishes={dishes} />
    </div>
  )
}

export default Home
