import React from "react"

const linkHandler = () => {

    const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        alert("Посилання натиснуто!");
    }

    return (
        <div className="linkHandler">
            <a href="https://www.google.com/" onClick={(e) => { onClickHandler(e) }}>Натисни на мене!!!</a>
        </div>
    )
};

export default linkHandler;
