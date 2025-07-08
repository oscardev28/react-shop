import './App.css'
import { products as initialProducts } from './mocks/products.json'
import { Product } from './components/Product'
import { useFilters } from './hooks/useFilters'
import { Filters } from './components/Filters'

function App() {
  
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <header>
        <h1>React Shop</h1>
      </header>
      <Filters />
      <main className=''>
        <ul className='products'>
          { 
            filteredProducts.map(product => {
              return (
                <Product key={product.id} product={product} />
              )
            }) 
          }
        </ul>
      </main>
    </>
  )
}

export default App
