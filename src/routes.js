
import Chatjs from "./components/Chatjs";
import Loginjs from "./components/Loginjs";
import {CHAT_ROUTE, LOGIN_ROUTE} from "./utils/consts";
/* import {Login} from "./components/Login";
import {Chat} from "./components/Chat"; */

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        element: <Loginjs/>
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        element: <Chatjs/>
    }
]