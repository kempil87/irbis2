import {NavLink, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

export const useHeader = () => {
    const [scroll, setScroll] = useState(0);
    const location = useLocation()
    // const navigate = useNavigate()

    // const logout = () => {
    //     localStorage.clear()
    //     navigate('/login')
    // }

    const registerScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", registerScroll)
    }, [])

    const linkRender = ({path,title}) => {
        return (
            <NavLink key={path} to={path}
                     style={{color: location.pathname !== '/' ? 'black' : scroll > 1 ? 'black' : 'white'}}
                     className={(isActive) => isActive ? "header-active-link " :  "header-link"}>
                {title}
            </NavLink>
        )
    }

  return {scroll,linkRender}
}