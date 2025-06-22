import React, { useState } from "react"
import './TouchEventElement.css'

const TouchEventElement = () => {

    const [currentColor, setCurrentColor] = useState([0, 0, 0])

    const randomNumberRGB = () => Math.floor(Math.random() * 256)


    const handleTouchEvent = (event: React.TouchEvent<HTMLDivElement>) => {
        const touch = event.touches[0];
        if (touch) {
            console.log(`x: ${touch.clientX}\n y: ${touch.clientY}`);

            setCurrentColor([randomNumberRGB(), randomNumberRGB(), randomNumberRGB()])
        }
    }

    const handleClickEvent = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log(`x: ${event.clientX}\n y: ${event.clientY}`);

        setCurrentColor([randomNumberRGB(), randomNumberRGB(), randomNumberRGB()])
    }

    const backgroundColor = `rgb(${currentColor[0]},${currentColor[1]},${currentColor[2]})`

    return (
        <div className="touch-div"
            onTouchStart={(e) => { handleTouchEvent(e) }}
            onClick={(e) => { handleClickEvent(e) }}
            style={{ backgroundColor: backgroundColor }}>
            <p>дотикайся сюди... або клацай :D</p>
        </div>
    )
};

export default TouchEventElement;
