import * as React from 'react';
import type { IProduct } from '../../Model/IProduct';
import './ProductCard.css'

interface ProductCardProps {
    title: React.ReactNode,
    product: IProduct,
    HandlerBtnClick: (id: string) => void
}

export default class ProductCard extends React.Component<ProductCardProps, {}> {
    constructor(props: ProductCardProps) {
        super(props);
    }


    render() {
        const { title, product, HandlerBtnClick } = this.props
        return (
            <div className='card' id={product.id}>
                <div className='card-image'><img src={product.imgURL} alt={product.name} /></div>
                <div className='card-name'>{product.name}</div>
                <div className='card-category'>{product.category}</div>
                <div className='card-description'>{product.description}</div>
                <div className='card-price'>{product.price}</div>
                <button className='card-btn' onClick={() => { HandlerBtnClick(product.id) }}>{title}</button>
            </div>
        );
    }
}