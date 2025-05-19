import React, { useState } from "react"

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <button onClick={ () => setIsOn(prevState => !prevState)} style={{cursor:"pointer"}}>{isOn ? "Включено" : "Вимкнено"}</button>
    </div>
  )
};

export default Toggle;
