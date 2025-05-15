import React from "react"
import  "./Greetings.css"

type Person = { 
    firstName : string,
    lastName: string
}

const Greetings = ({firstName ,lastName}: Person ) => {
    return <h2>Привіт, {firstName} {lastName}!</h2>
}

export default Greetings;