import React, { useContext } from "react"
import { dataContex } from "./DataContext";

const DisplayData = () => {
    const posts = useContext(dataContex);
    return (
        <>
            {posts?.map((post) => {
                return (
                    <div key={post?.id} style={{ maxWidth: "250px", border: "1px solid black", color: "white" }}>
                        <div style={{ fontSize: "24px" }}>{post?.title}</div>
                        <div style={{ marginTop: "5px" }}>{post?.body}</div>
                    </div>
                )
            })}
        </>
    )
};

export default DisplayData;
