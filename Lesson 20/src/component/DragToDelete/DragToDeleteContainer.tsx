import { useEffect, useState } from "react";
import DragList from "./DragList";
import './DragToDeleteContainer.css'

interface DragToDeleteProps {
    list: string[]
}

const DragToDelete: React.FC<DragToDeleteProps> = ({ list }) => {
    const [dragging, setDragging] = useState<boolean>(false)

    const [listToDelete, setListToDelete] = useState<string[]>([])
    const [deletedList, setDeletedList] = useState<string[]>([])

    const [draggedItem, setDraggedItem] = useState<number | null>(null)

    useEffect(() => {
        if (!Array.isArray(list)) return;

        setListToDelete(list)

    }, [])

    const handleOnDragStart = (itemIndex: number) => {
        setDragging(true)
        setDraggedItem(itemIndex)
    }

    const handleDragEnd = () => {
        setDragging(false);
    };

    const handleOnDrop = (itemIndex: number | null, event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        if (itemIndex !== null && itemIndex >= 0) {
            console.log(listToDelete[itemIndex]);

            setDeletedList(prev => [...prev, listToDelete[itemIndex]])
            setListToDelete(listToDelete.filter((_, index) => index !== itemIndex))
            setDragging(false);
        }
    }

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <div className="drag-delete-container">
            <div className="drag-delete drag-block">
                <DragList list={listToDelete} handleOnDragStart={handleOnDragStart} handleDragEnd={handleDragEnd} />
            </div>
            <div className="drag-basket drag-block" onDrop={e => handleOnDrop(draggedItem, e)} onDragOver={e => handleDragOver(e)} style={{ boxShadow: dragging ? '5px 5px 15px red' : 'none' }}>
                <div>Видалено: </div>
                <DragList list={deletedList} />
            </div>
        </div>
    )
};

export default DragToDelete;
