import React, { useState } from 'react'
import { categoriesData } from '../data/categoriesData'
import { CategoryModel } from '../models/CategoryModel'

function CategoryPage() {

    const [categories, setcategories] = useState<CategoryModel[]>(categoriesData)

  return (<>

  <ul>
      {
          categories && categories.map((item) => <li>{item.name.toUpperCase()}</li>)
      }
  </ul>

  </>)
}

export default CategoryPage