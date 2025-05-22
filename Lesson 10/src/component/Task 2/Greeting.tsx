import React, { useState } from "react"

interface GreetingProps {
    greeting?: string,
    username?: string
}


const GreetingComponent = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState("Петро");

    return isLogin ? <Greeting username={name} /> : <Greeting />
}

const Greeting = ({ greeting = "привіт", username = "гість" }: GreetingProps) => {
    return (
        <div>
            {greeting}, {username}!
        </div>
    )
};

export default GreetingComponent;
