import React from 'react';
import type { IProductCategory } from './Model/IProductCategory';
import NamesList from './component/Names';
import AnimalList from './component/Animals';
import ProductList from './component/ProductList';
import GoodList from './component/GoodsList';
import type { IGoodsCategory } from './Model/IGoodsCategory';

const Products: IProductCategory[] = [{ id: 1, name: 'Beverages', products: ['Tea', 'Coffee', 'Juice'] }, { id: 2, name: 'Snacks', products: ['Chips', 'Cookies', 'Nuts'] }]
const goods: IGoodsCategory[] = [{ id: 1, name: 'Technology', subItems: ['Computers', 'Smartphones', 'Wearables'] }, { id: 2, name: 'Home Appliances', subItems: ['Refrigerators', 'Microwaves', 'Washing Machines'] }];

const App = () => {
  return (
    <div>
      <NamesList />
      <AnimalList />
      <ProductList list={Products} />
      <GoodList list={goods} />
    </div>

  );
};

export default App;