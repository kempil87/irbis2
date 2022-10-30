import {Link} from "react-router-dom";
import {useHeader} from "./useHeader";
const logo = "https://xn--m1agla.xn--p1ai/wp-content/uploads/2021/12/Irbis-111x128.png"

export const Logo = () => {
    const {scroll} = useHeader()

    return (
        <div className="flex items-center">
            <Link to="/" className="irbis-logo">
                <img className="irbis-logo" alt='Логотип' src={logo}/>
            </Link>
            <h6 className={scroll>1 ? "scroll-hashtag" :"hashtag"}>#охотаначалась</h6>
        </div>
    );
};