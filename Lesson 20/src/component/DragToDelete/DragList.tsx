import React from "react"

interface DragListProps {
    list: string[],
    handleOnDragStart?: (index: number) => void
    handleDragEnd?: () => void
}

const DragList: React.FC<DragListProps> = ({ list, handleOnDragStart, handleDragEnd }) => {
    return (
        <div className='item-container'>
            {
                list.length > 0 ?
                    list.map((item, index) => <div
                        draggable={!!handleOnDragStart}
                        onDragStart={
                            handleOnDragStart ? () => handleOnDragStart(index) : undefined}
                        onDragEnd={handleDragEnd ? handleDragEnd : undefined}
                        key={index}>{item}</div>) :
                    <p>Немає ітемів в списку :D.</p>
            }
        </div>
    )
};

export default DragList;
