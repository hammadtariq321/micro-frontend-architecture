import React from 'react'
import { ProductsMocData } from '../moc-data/ProductsMocData'
import ProductCard from '../components/ProductCard'

const ProductsList = () => {
    const products = ProductsMocData
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-5">Products List</h1>
            {products && products.map((product) =>
                (< ProductCard data={product} />)
            )}
        </div>
    )
}

export default ProductsList