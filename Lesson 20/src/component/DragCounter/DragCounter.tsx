import { useState } from "react"
import './DragCounter.css'

const DragCounter = () => {

    const [dropCount, setDropCount] = useState(0);

    const handleDragStart = () => {
        console.log("перетягування розпочалось!!");

    }

    const handleDrop = () => {
        setDropCount(prevState => prevState + 1)
    }

    const handleDragOver = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault()
    }

    return (
        <div className="drag-counter">
            <div className="drop-container">
                <div className="drop-element drop-block"
                    draggable
                    onDragStart={handleDragStart}
                >U can drop me!</div>
                <div className="drop-zone drop-block"
                    onDrop={handleDrop}
                    onDragOver={(e) => handleDragOver(e)}
                >
                    <div>Drop Zone!</div>
                    <div>Count: {dropCount}</div>
                </div>
            </div>
        </div>
    )
};

export default DragCounter;


