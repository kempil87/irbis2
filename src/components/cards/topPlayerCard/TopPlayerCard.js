import React from 'react';
import './TopPlayerCard.css'
import {Link} from "react-router-dom";
import {Skeleton} from "../../skeleton/Skeleton";

export const TopPlayerCard = ({name, position, number, image,assist,games,goals,score, _id, loader}) => {

    return (
        <Link to={`/players/${_id}`} className='flex relative player-card'>
            {loader ? (
                <Skeleton width={320} height={340} bg={'rgba(232,236,241,0.5)'}/>
            ) : (
                <>
                    <div className='player-card-img-wrap'>
                        <img alt={name} className='player-card-img '
                             src='https://thumb.tildacdn.com/tild3333-6261-4165-b135-346231653035/-/resize/260x270/-/format/webp/noroot.png'/>
                    </div>
                    <div className='absolute left-auto w-full text-center text-black bottom-0 pb-16 font-medium text-lg'>{name}</div>
                    <div className='absolute left-auto w-full text-center text-black text-opacity-70 bottom-0 pb-12 font-medium '>{position}</div>
                    <div className='absolute left-auto w-full text-center text-black text-opacity-70 bottom-0 pb-6  space-x-5'>
                        <span className='font-bold'>И</span>
                        <span className='font-bold'>Г</span>
                        <span className='font-bold'>А</span>
                        <span className='font-bold'>О</span>
                    </div>
                    <div className='absolute left-auto w-full text-center text-black text-opacity-70 bottom-0 pb-2 space-x-3 '>
                        <span className='font-bold'>{games}</span>
                        <span className='font-bold'>{goals}</span>
                        <span className='font-bold'> {assist}</span>
                        <span className='font-bold'> {score}</span>
                    </div>
                    <div className='absolute right-3 top-3 lg:right-7 lg:top-7 shadow-2xl border rounded-full z-20 text-white bg-blue-200 w-14 h-14 flex justify-center items-center text-lg italic font-medium'>
                        {number}
                    </div>
                </>
            )}
        </Link>
    );
};
