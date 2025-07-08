export function Product({ product }) {

    return (
        <li className='product_card'>
            <img src={product.thumbnail} alt={product.title}></img>
            <h5 className=''>{product.title}</h5>
            <p>{product.description}</p>
            <span>{product.price} €</span>
        </li>
    )
}