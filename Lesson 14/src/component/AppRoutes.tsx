import React from "react"
import { publicRoutes } from "../routes";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Routes>
            {publicRoutes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} />)}
        </Routes>
    )
};

export default AppRoutes;
