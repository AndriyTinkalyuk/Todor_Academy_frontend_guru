import CartPage from "./Pages/Cart/CartPage";
import Shop from "./Pages/Shop/Shop";
import Profile from "./Pages/Profile/Profle";

import { SHOP_ROUTE, CART_ROUTE, PROFILE_ROUTE } from "./utils/consts";


export const publicRoutes = [
    {
     path : SHOP_ROUTE,
    Component: Shop
    }, 
    {
     path: CART_ROUTE,
     Component: CartPage
    },
     {
     path: PROFILE_ROUTE,
     Component: Profile
    }
]


export const headerRoutes = [
    {
     path: CART_ROUTE,
     label: "Cart"
    },
     {
     path: PROFILE_ROUTE,
     label: "Profile"
    }
]