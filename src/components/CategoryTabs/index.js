import './index.css'

const CategoryTabs = props => {
  const {menu, setActive} = props

  return (
    <div className="tabs">
      {menu.map(item => (
        <button
          type="button"
          key={item.menu_category_id}
          onClick={() => setActive(item.menu_category)}
        >
          {item.menu_category}
        </button>
      ))}
    </div>
  )
}

export default CategoryTabs
