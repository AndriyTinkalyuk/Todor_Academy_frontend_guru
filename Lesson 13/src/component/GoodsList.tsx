import React from "react"
import type { IGoodsCategory } from "../Model/IGoodsCategory";


interface GoodsListProps {
    list: IGoodsCategory[]
}

const GoodList = ({ list }: GoodsListProps) => {
    return (
        <ul>
            <h2>Goods List</h2>
            {list.map(item => (<li key={item.id}> {item.name} <ul><h4>Підкатегорія:</h4> {item.subItems.map(item => (<li key={item}>{item}</li>))}</ul></li>))}
        </ul>
    )
};

export default GoodList;
