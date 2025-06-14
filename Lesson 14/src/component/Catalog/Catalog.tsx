import React, { useEffect, useState } from 'react';
import type { IProduct } from '../../Model/IProduct';
import ProductCard from '../ProductCard/ProductCard';
import ProductService from '../../Services/ProductService';
import './Catalog.css'
import { useAppDispatch, useAppSelector } from '../../hooks/redus';
import { orderSlice } from '../../Store/reducers/OrderSlice';
import { fetchProducts } from '../../Store/reducers/ActionCreators';
import ProductFilter from '../ProductFilter/ProductFilter';

const Catalog: React.FC = () => {
    const dispatch = useAppDispatch();
    const { addOrder } = orderSlice.actions;
    const { products, isLoading, error } = useAppSelector(state => state.productReducer)

    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState('all')

    useEffect(() => {
        dispatch(fetchProducts())
    }, []);

    useEffect(() => {
        setFilteredProducts(products);

        const uniqueCategories = new Set(products.map(product => product.category))
        setCategories(['all', ...uniqueCategories]);
    }, [products])

    useEffect(() => {
        if (selectedCategory === 'all') {
            setFilteredProducts(products)
        } else {
            setFilteredProducts(products.filter(p => p.category === selectedCategory))
        }
    }, [selectedCategory])




    const OnOrderBtnClick = (id: string) => {
        const item = products.find(item => item.id === id);
        if (item) {
            dispatch(addOrder(item))
        }
        console.log('Order:', item);
    };


    return (
        <>
            <h2>Catalog</h2>
            <ProductFilter categories={categories} OnSelectHandler={(category) => setSelectedCategory(category)} />
            <div className='catalog'>
                {isLoading && <p>Loaging goods...</p>}
                {error && <p>{error}</p>}
                {filteredProducts.map((item) =>
                    <ProductCard
                        key={item.id}
                        product={item}
                        HandlerBtnClick={OnOrderBtnClick}
                        title='add to cart'
                    />
                )}
            </div>
        </>
    );
};

export default Catalog;
