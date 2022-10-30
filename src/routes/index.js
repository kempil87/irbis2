import {HomePage} from "../pages/main/homePage/HomePage";
import {Auth} from "../pages/auth/Auth";
import {Registration} from "../pages/auth/Registration";
import {Photo} from "../pages/main/media/Photo";

export const AUTH_ROUTES = [
    {
        path: '/login',
        component: <Auth/>
    },
    {
        path: '/registration',
        component: <Registration/>
    },
]

export const MAIN_ROUTES = [
    {
        path: '/',
        component: <HomePage/>
    },
    {
        path: '/photo/:id',
        component: <Photo/>
    },
]

