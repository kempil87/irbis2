import React from 'react';
import './Footer.css'
import IconSvgInst from "../../assets/icons/IconSvgInst";
import {IconSvgTlg} from "../../assets/icons/IconSvgTlg";
import IconSvgVk from "../../assets/icons/IconSvgVk";
import {IconSvgYouTube} from "../../assets/icons/IconSvgYouTube";

export const Footer = () => {
    return (
        <div className='footer py-8 bg-[#16171d]'>
            <div className="container m-auto text-white">
                <div className='flex justify-between items-center'>
                    <div className='text-[#616473] font-medium'>
                        Телефон: +79874086970
                        <br/>
                        E-mail: <a href='mailto:irbis.floorball@gmail.com'>irbis.floorball@gmail.com</a>
                        <br/><br/>
                        Официальный сайт «ФБК-Ирбис Казань». © 2021-2022
                        При использовании материалов сайта ссылка на источник обязательна.
                        <br/>
                        <span className='font-medium text-base'>Мы в соцсетях</span>
                        <div className="flex items-center my-3 space-x-4 items-center">
                            <a href={'/'}>
                                <IconSvgInst/>
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
                    <div className='text-[#616473] font-medium'>
                        Разработка и дизайн  <a href=''>Kempil87</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
