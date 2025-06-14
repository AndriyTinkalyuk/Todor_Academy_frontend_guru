import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import './Cart.css';
import { orderSlice } from '../../Store/reducers/OrderSlice';
import type { IProduct } from '../../Model/IProduct';

const Cart: React.FC = () => {
    const orders = useSelector((state: any) => state.orderReducer.orders);
    const dispatch = useDispatch();
    const { removeOrder, clearOrders } = orderSlice.actions;

    const onDeleteBtnClick = (id: string) => {
        const index = orders.indexOf((item: IProduct) => item.id == id)
        dispatch(removeOrder(index));
    };

    const amountOrder = (orders: IProduct[]) => {
        const sum = orders.reduce((accum, item) => accum + Number(item.price), 0)

        return sum.toFixed(2);
    }

    return (
        <div className='cart'>
            {orders.length > 0 ? (
                <div>
                    <div className='cart-details'>
                        <div className='cart-items-count'>Count of items {orders.length}</div>
                        <div className='cart-sum'>Total: {amountOrder(orders)}</div>
                    </div>
                    <div>
                        <button className='cart-clear' onClick={() => dispatch(clearOrders())}>
                            Clear cart
                        </button>
                    </div>
                    {orders.map((item: any) => (
                        <ProductCard
                            key={item.id}
                            product={item}
                            HandlerBtnClick={() => onDeleteBtnClick(item.id)}
                            title='remove'
                        />
                    ))}
                </div>
            ) : (
                <div>Cart is empty</div>
            )}
        </div>
    );

};

export default Cart;
