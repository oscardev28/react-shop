import { useState } from 'react'
import './App.css'
import { products as initialProducts } from './mocks/products.json'

function App() {
  const [filter, setFilters] = useState({
    minPrice: 0,
    category: 'all'
  })
  const filterProducts = products.filter(item => {
    if(
      item.price >= filter.minPrice && (
        item.category === filter.category || filter.category === 'all'
      )
    ) {
      return item
    }
  })

  return (
    <>
      
    </>
  )
}

export default App
