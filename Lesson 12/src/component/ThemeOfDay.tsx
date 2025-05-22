import React from "react"

interface ThemeOfDayProps {
    time: Date
}

const ThemeOfDay = ({ time }: ThemeOfDayProps) => {
    const hour = time.getHours();
    let greeting = ''

    switch (true) {
        case hour >= 6 && hour < 12:
            greeting = "Доброго ранку";
            break;
        case hour >= 12 && hour < 18:
            greeting = "Добрий день";
            break;
        case hour >= 18 && hour < 24:
            greeting = "Добрий вечір";
            break;
        case hour >= 24 && hour < 6:
            greeting = "Добраніч";
            break;
        default:
            greeting = "це не має відпрацювати. Ніколи. Мабуть.";
            break;
    }
    return (
        <h1>
            {greeting}
        </h1>
    )
};

export default ThemeOfDay;
