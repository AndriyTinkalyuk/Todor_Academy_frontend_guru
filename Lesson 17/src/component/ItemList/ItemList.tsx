import React from "react"
import type { ItemInterface } from "../../Model/ItemInterface";

interface ItemListProps {
    list: ItemInterface[]
    handleClick: (id: string) => void
}

const ItemList: React.FC<ItemListProps> = ({ list, handleClick }) => {
    return (
        <ul className="list-container">
            {
                list.length > 0 ?
                    list.map(({ id, name }) => <li key={id} onClick={() => handleClick(id)} style={{ cursor: 'pointer' }}>{name}</li>) :
                    <p>Список пустий.</p>
            }
        </ul>
    )
};

export default ItemList;
