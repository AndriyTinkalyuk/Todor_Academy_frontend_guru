import React from "react"

interface StyledButtonProps { 
  text: string;
}

const StyledButton = ({text}: StyledButtonProps) => {
  return (
    <button style={{backgroundColor: "green", color: "white", padding: "25px"}}>
      {text}
    </button>
  )
};

export default StyledButton;
