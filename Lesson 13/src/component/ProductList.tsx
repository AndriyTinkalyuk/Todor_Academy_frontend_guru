import React from "react"
import type { IProductCategory } from "../Model/IProductCategory";


interface ProductListProps {
    list: IProductCategory[]
}

const ProductList = ({ list }: ProductListProps) => {
    return (
        <ul>
            <h2>Product List</h2>
            {list.map(item => (<li key={item.id}> {item.name} <ul><h4>Підкатегорія:</h4>{item.products.map(item => (<li key={item}>{item}</li>))}</ul></li>))}
        </ul>
    )
};

export default ProductList;
