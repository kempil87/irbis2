import React from 'react';
import {Link} from "react-router-dom";
import {IconSvgChevronRight} from "../../assets/icons/IconSvgChevronRight";

export const ToAll = ({path,children}) => {
    return (
        <div className='flex items-center go-to-all-wrap'>
            <Link className='go-to-all hidden md:block' to={path}>{children}</Link>
            <IconSvgChevronRight />
        </div>
    );
};
