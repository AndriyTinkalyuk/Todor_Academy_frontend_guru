import React, { useEffect, useState } from "react"
import './ProductFilter.css'

interface ProductFilterProps {
    categories: string[]
    OnSelectHandler: (category: string) => void
}



const ProductFilter: React.FC<ProductFilterProps> = ({ categories, OnSelectHandler }) => {
    return (
        <div className="categories">
            {categories.length > 0 && (<>
                <label htmlFor="select-category">category: </label>
                <select onChange={(e) => OnSelectHandler(e.target.value)} id='select-category'>
                    {categories.map(category => <option key={category} value={category}>{category}</option>)}
                </select></>)}
        </div>
    )
};

export default ProductFilter;
