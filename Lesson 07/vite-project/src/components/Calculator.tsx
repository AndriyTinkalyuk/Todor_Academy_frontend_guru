import React, { useState } from "react"
import UseInput from "../hooks/UseInput";

const Calculator = () => {
    const [result, setResult] = useState(0);
    const numberA = UseInput({InitialValue: 0});
    const numberB = UseInput({InitialValue: 0});
  return (
    <div>
      <input {...numberA} type="number" />
       <input {...numberB} type="number" />
       <button onClick={() => setResult(Number(numberA.value) + Number(numberB.value))}>Додати</button>
        <button onClick={() => setResult(Number(numberA.value) - Number(numberB.value))}>Відняти</button>
        <button onClick={() => setResult(Number(numberA.value) / Number(numberB.value))}>Ділення</button>
        <button onClick={() => setResult(Number(numberA.value) * Number(numberB.value))}>Помножити</button>

       <div>Результат: {result}</div>
    </div>
  )
};

export default Calculator;