import React, {useState} from 'react';
import {Drawer} from "antd";
import './MainMenu.css'
import IconSvgInst from "../../assets/icons/IconSvgInst";
import {IconSvgTlg} from "../../assets/icons/IconSvgTlg";
import IconSvgVk from "../../assets/icons/IconSvgVk";
import {NAV_LINKS} from "../header/nav-links";
import {NavLink} from "react-router-dom";
import {useHeader} from "../header/useHeader";
import {IconSvgYouTube} from "../../assets/icons/IconSvgYouTube";

export const MainMenu = () => {
    const {scroll} = useHeader()
    const [isVisible, setIsVisible] = useState(false)

    const showMenu = () => {
        setIsVisible(true)
    };
    const closeMenu = () => {
        setIsVisible(false)
    };

    const linkRender = ({title, path,icon}) => {
        return (
            <NavLink
                className={(isActive) => isActive ? 'text-white font-medium text-[17px] flex items-center space-x-2' : 'text-white font-medium text-[17px] flex items-center space-x-2'}
                key={path}
                to={path}
                onClick={closeMenu}
            >
                {icon}
                <div>
                    {title}
                </div>
            </NavLink>
        )
    };

    return (
        <div>
            <div onClick={showMenu} className='px-1.5 py-4'>
                <div className={scroll > 1 ? 'menu-burger-scroll' : "menu-burger"}/>
            </div>

            <Drawer zIndex={8000} className={'main-menu'} width={'82%'} closable={false} placement="left"
                    onClose={closeMenu}
                    open={isVisible}
            >
                <div className='flex justify-end mb-3'>
                    <div className='bg-gray-500 px-3 text-xs py-1.5 text-white rounded-2xl hover:opacity-70'
                         onClick={closeMenu}>Закрыть
                    </div>
                </div>
                <div className='flex justify-between h-full flex-col'>
                    <div className="menu-nav flex flex-col space-y-3 ">
                        {NAV_LINKS.map(linkRender)}
                    </div>
                    <div>
                        <div className='text-white text-center'>
                            «Ирбис» — первый клуб по флорболу, который представляет Татарстан на Российской флорбольной
                            арене.
                            Основан в июне 2021 года.
                            <br/>
                            <span className='font-medium'>Мы в соцсетях</span>
                        </div>
                        <div className="menu-footer flex items-center justify-center space-x-4 items-center  pt-4">
                            <a href={'/'}>
                                <IconSvgInst />
                            </a>
                            <a href={'/'}>
                                <IconSvgTlg/>
                            </a>
                            <a href={'/'}>
                                <IconSvgVk/>
                            </a>
                            <a href={'/'}>
                                <IconSvgYouTube/>
                            </a>
                        </div>
                    </div>
                </div>
            </Drawer>
        </div>
    );
};
