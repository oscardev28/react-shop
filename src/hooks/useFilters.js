import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {
    const { filters, setFilters } = useContext(FiltersContext);

    const filterProducts = (products) => {
        return products.filter(item => {
            if(
                item.price >= filters.minPrice && (
                    item.category === filters.category || filters.category === 'all'
                )
            ) {
                return item
            }
        })
    }

    return { filters, filterProducts, setFilters}
}