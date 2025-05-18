import React from "react"
import Child from "./Child";

const Parent = () => {
    const textForChild = "It's text for child!!!!"
  return (
    <div>
      <h1>Its Parent</h1>
      <Child text={textForChild}/>
    </div>
  )
};

export default Parent;
