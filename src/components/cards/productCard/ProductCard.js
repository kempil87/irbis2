import React from 'react';
import {IconSvgHeart} from "../../../assets/icons/IconSvgHeart";

export const ProductCard = ({image, name, badge, price}) => {
    return (
        <div className='flex justify-center product-image-card p-1.5 transition'>
            <div className='relative'>
                <div className='product-image-wrapper'>
                    <img className='w-[260px] object-cover' src={image} alt={name}/>
                </div>
                <div className='absolute bottom-[-8px] left-0 font-medium text-black  text-[16px]'>{name}</div>

                <div className='flex justify-between items-center absolute w-full top-0 left-0'>
                    <div className='px-3 py-0.5 bg-red-300 rounded-2xl text-white text-[13px] font-medium'>{badge}</div>
                    <div className='flex justify-between items-center space-x-3'>
                        <IconSvgHeart />
                        <div className='font-medium text-black'>{price} ₽</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
