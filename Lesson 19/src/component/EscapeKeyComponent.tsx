import React from "react"

const EscapeKeyComponent = () => {

    const handleEscape = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Escape') {
            console.log(`pressed ${e.key}`);
        }
    }

    return (
        <div
            tabIndex={0}
            onKeyDown={handleEscape}
            style={{
                height: "300px",
                width: "100%",
                border: "1px solid white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <p> тут консолиться повідомлення в консоль на Escape.</p>
        </div>
    )
};

export default EscapeKeyComponent;
