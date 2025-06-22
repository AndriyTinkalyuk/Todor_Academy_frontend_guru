import React from "react"

const CtrlDHotkeyComponent = () => {

    const handleHotKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.ctrlKey && e.key === "d") {
            e.preventDefault()
            alert("Ctrl+D pressed!");
        }
    }

    return (
        <div onKeyDown={(e) => handleHotKey(e)}
            tabIndex={1}
            style={{
                height: "300px",
                width: "100%",
                border: "1px solid white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "5px",
            }}
        >
            <p>а тут треба нажати Сtrl + D</p>
        </div>
    )
};

export default CtrlDHotkeyComponent;
