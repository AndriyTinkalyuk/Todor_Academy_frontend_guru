import { Route, Routes } from "react-router-dom";
import { routes } from "../routes";

const AppRoutes = () => {
    return (
        <Routes>
            {routes.map(({ path, Component }) => <Route path={path} Component={Component}></Route>)}
        </Routes>
    )
};

export default AppRoutes;
