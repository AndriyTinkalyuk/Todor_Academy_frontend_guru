import React, { useState } from "react"
import TextInputForm from "./TextInputForm";

const TextInputFormParent = () => {

    const [value, setValue] = useState("");

    const showValue = (value: string) => {

        if (value && value.trim().length > 0) {
            alert(value);
            setValue("")
            return
        }

        alert("Поле повинно містити мінімум 1 символ.")
    }

    return (
        <TextInputForm handleClick={showValue} value={value} onChange={setValue} />
    )
};

export default TextInputFormParent;
