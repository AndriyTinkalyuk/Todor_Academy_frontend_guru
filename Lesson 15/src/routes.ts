import Home from "./pages/Home";
import Library from "./pages/Library";
import Profile from "./pages/Profile";
import { HOME_ROUTE, LIBRARY_ROUTE, PROFILE_ROUTE } from "./utils/consts";


export const routes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: LIBRARY_ROUTE,
        Component: Library
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    }

]


export const headerRoutes = [
    {
        path: HOME_ROUTE,
        label: "Home"
    },
    {
        path: LIBRARY_ROUTE,
        label: "Library"
    },
    {
        path: PROFILE_ROUTE,
        label: "Profile"
    }

]