import React from 'react';
import {IconSvgProfile} from "../../assets/icons/IconSvgProfile";
import {Dropdown, Menu} from "antd";
import './AuthMenu.css'
import {Link} from "react-router-dom";
import {useHeader} from "../header/useHeader";

export const AuthMenu = () => {
    const {scroll} = useHeader()

    const menu = (
        <Menu
            items={[
                {
                    label: <Link to='/login'>Войти</Link>,
                    key: '2',
                },
                {
                    label: <Link to='/registration'>Зарегестрироваться</Link>,
                    key: '1',
                },

            ]}
        />
    );

    return (
        <div>
            <Dropdown placement='bottomRight' overlay={menu} trigger={['click']}>
                <div onClick={e => e.preventDefault()}>
                    {scroll < 1 && (<IconSvgProfile scroll={scroll}/>)}
                </div>
            </Dropdown>
        </div>
    );
};
