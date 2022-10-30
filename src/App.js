import {MainStack} from "./routes/MainStack";
import {AuthStack} from "./routes/AuthStack";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export const App = () => {
    const t = true
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])


    if (!t) {
        return <AuthStack/>
    }
    return <MainStack/>
}

