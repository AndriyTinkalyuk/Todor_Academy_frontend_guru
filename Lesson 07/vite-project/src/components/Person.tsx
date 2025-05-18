import React from "react"

interface PersonProps {
    personName: string,
    age: number, 
    home: string
}

const Person = (props : PersonProps) => {
  return (
    <div>
      <div>{props.personName}</div>
      <div>{props.age}</div>
      <div>{props.home}</div>
    </div>
  )
};

export default Person;
