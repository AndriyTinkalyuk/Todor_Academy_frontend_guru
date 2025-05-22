import React from "react"

const userNames: string[] = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];

const NamesList = () => {

    return (
        <ul>
            <h2>Names</h2>
            {userNames.map(name => <li key={name}>{name}</li>)}
        </ul>
    )
};

export default NamesList;
