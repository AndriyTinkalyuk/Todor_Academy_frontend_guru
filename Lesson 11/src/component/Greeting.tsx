import React from "react"

interface GreetingProps {
    username: string
}

const Greeting = ({ username = "Andrii" }: GreetingProps) => {
    return (
        <div>
            Це персоналізоване привітання. Привітики {username}!
        </div>
    )
};

export default Greeting;
