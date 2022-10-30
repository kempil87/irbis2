import {Logo} from "./Logo";
import './Header.css'
import {NAV_LINKS} from "./nav-links";
import {useHeader} from "./useHeader";
import {MainMenu} from "../mainMenu/MainMenu";
import {AuthMenu} from "../authMenu/AuthMenu";

export const Header = () => {
    const {scroll, linkRender} = useHeader()


    return (
        <div className={scroll > 0 ? 'header-scroll' : "header"}>
            <div className='container flex justify-between items-center px-5 sm:px-0'>
                <Logo/>
                <div className="hidden sm:flex items-center">
                    {NAV_LINKS.map(linkRender)}
                    {/*<AuthMenu/>*/}
                </div>


                <div className="flex sm:hidden items-center">
                    {/*<AuthMenu/>*/}
                    <MainMenu/>
                </div>
            </div>
        </div>
    );
};
