import React from "react"
import './Alert.css'

interface AlertProps { 
    message: string;
    type?: "success" | "error";
}


const Alert = (props : AlertProps) => {
    const ValidateType = props.type === "success" || props.type === "error";
  return (
    <div className= {ValidateType ? props.type : "default"}>
      {props.message}
    </div>
  )
};

export default Alert;
