import React from "react"

interface OutfitSelector {
    date: Date
}

const OutfitSelector = ({ date }: OutfitSelector) => {
    const month = date.getMonth()

    return (
        <div>
            <h2>Поради щодо вибору одягу.</h2>
            {(month >= 5 && month <= 7) ? "Рекомендуємо легкий одяг." : "Одягайся нормально, брат, там напевно холодно..."}
        </div>
    )
};

export default OutfitSelector;
