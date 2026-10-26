
import './index.css'

const CategoryTabs = ({
  categories,
  activeCategory,
  setActiveCategory,
}) => (
  <ul className="category-tabs">
    {categories.map(category => (
      <li key={category.menu_category_id}>
        <button
          type="button"
          className={
            activeCategory === category.menu_category
              ? 'active-category'
              : ''
          }
          onClick={() => setActiveCategory(category.menu_category)}
        >
          {category.menu_category}
        </button>
      </li>
    ))}
  </ul>
)

export default CategoryTabs
