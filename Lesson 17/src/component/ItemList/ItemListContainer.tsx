import React, { useEffect, useState } from "react"
import type { ItemInterface } from "../../Model/ItemInterface";
import ItemList from "./ItemList";

interface ItemListContainerProps {
    items: ItemInterface[]
}

const ItemListContainer: React.FC<ItemListContainerProps> = ({ items }) => {
    const [list, setList] = useState<ItemInterface[]>([])

    useEffect(() => {
        setList(items)
    }, [])


    const showId = (id: string) => {
        console.log(id);

    }

    return (
        <ItemList list={list} handleClick={showId} />
    )
};

export default ItemListContainer;
