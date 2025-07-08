import { useFilters } from "../hooks/useFilters"

export function Filters() {
    const { filters, setFilters } = useFilters();

    const handleChangeMinPrice = (ev) => {
        console.log('Event', ev.target.value)
        setFilters(prevState => {
            return {
                ...prevState,
                minPrice: ev.target.value
            }
            
        })
    }

    const handleChangeCategory = (ev) => {
        console.log('Event', ev.target.value)
        setFilters(prevState => {
            return {
                ...prevState,
                category: ev.target.value
            }
        })
    }

    return (
        <section className="filters">
            <div className="filter_price">
                <label htmlFor="price_filter">Precio:</label>
                <input onChange={handleChangeMinPrice} value={filters.minPrice} id="price_filter" type="range" min="1" max="500" />
                <span>{filters.minPrice}€</span>
            </div>
            <div className="filter_cat">
                <label htmlFor="cat_filter">Categorias:</label>
                <select onChange={handleChangeCategory} id="cat_filter">
                    <option value='all'>Todas</option>
                    <option value='forniture'>Muebles</option>
                    <option value='fragrances'>Fragancias</option>
                    <option value='beauty'>Belleza</option>
                </select>
            </div>
        </section>
    )
}
