import React from "react"

interface DynamicElementProps  { 
    content: string;
}

const DynamicElement = ({content} : DynamicElementProps) => {
  return ( React.createElement("h1", {}, content) )
};

export default DynamicElement;
