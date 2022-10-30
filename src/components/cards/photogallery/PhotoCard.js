import React from 'react';
import '../../media/Media.css'
import {Link} from "react-router-dom";
import {Skeleton} from "../../skeleton/Skeleton";
import {IconSvgImage} from "../../../assets/icons/IconSvgImage";

export const PhotoCard = ({_id, image, date, name, all, loading}) => {

    if (loading) {
        return (
            <div className='mb-8'>
                <Skeleton width={480} height={230} radius={12}/>
            </div>
        )
    }
    return (
        <Link to={`/photo/${_id}`} className='relative mb-8 photo-card-wrap flex flex-col justify-center'>
            <img className='object-cover photo-card-img' src={image} alt={name}/>
            <div className='absolute w-full h-full bg-gray-600 bg-opacity-40 left-0 top-0 photo-card-bg'/>
            <div className='absolute z-20 font-bold text-[16px] left-0 text-white bottom-0 p-7'>{name}</div>
            <div className='absolute z-20 font-medium text-xs right-0 text-white top-0 p-7'>{date}</div>
            <div className='flex items-center absolute z-20 left-0 text-white top-0 p-7'>
                <IconSvgImage />
                <div className='absolute z-20 ml-8 font-bold'>{all}</div>
            </div>
        </Link>
    );
};
