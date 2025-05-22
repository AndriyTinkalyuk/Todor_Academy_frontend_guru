import React, { useEffect, useState } from "react"
import { dataContex } from "./DataContext";
import DisplayData from "./DisplayData";



const getData = async (url: string) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error("Error getData" + error);
    }
}

const Comments = () => {
    const [data, setData] = useState(null)

    const response = getData("https://jsonplaceholder.typicode.com/posts");
    useEffect(() => { response.then(data => setData(data.slice(0, 10))) })
    return (
        <><dataContex.Provider value={data}>
            <div style={{ display: 'flex', flexWrap: "wrap", gap: "5px" }}>
                <DisplayData />
            </div>
        </dataContex.Provider>
        </>
    )
};

export default Comments;
