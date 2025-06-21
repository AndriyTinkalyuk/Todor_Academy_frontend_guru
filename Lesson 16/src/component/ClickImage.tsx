
const ClickImage = () => {
    return (
        <div className="image-container">
            <img src="/Racoon.jpg" alt="Racoon" onClick={() => alert("Ви натиснули на зображення!")} style={{ cursor: "pointer" }} />
        </div>
    )
};

export default ClickImage;
