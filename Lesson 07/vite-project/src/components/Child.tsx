import React from "react"

interface ChildProps { 
    text: string
}

const Child = ({text} : ChildProps) => {
  return (
    <p>
     {text} 
    </p>
  )
};

export default Child;
