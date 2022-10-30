import React, {useEffect} from 'react';
import {PhotoCard} from "../cards/photogallery/PhotoCard";
import {useState} from "react";
import {api} from "../../api/axios";
import {Link} from "react-router-dom";
import {IconSvgChevronRight} from "../../assets/icons/IconSvgChevronRight";
import {ToAll} from "../toAll/ToAll";

export const Media = () => {
    const [tab, setTab] = useState(0);
    const [homeMedia, setHomeMedia] = useState([]);
    const [loader, setLoader] = useState(true);


    const getHomeMedia = () => {
        setLoader(true)
        api.get('/media').then((res) => {
            setHomeMedia(res.data)
            setLoader(false)
        })
    }

    useEffect(() => {
        getHomeMedia()
    }, [tab])

    return (
        <div className='bg-[#E8ECF1]'>
            <div className='container py-14 m-auto'>
                <div className='px-3 md:px-0 mb-8 flex items-center justify-between'>
                    <div className="flex items-center">
                        <div onClick={() => setTab(0)}
                             className={tab === 0 ? 'font-medium cursor-pointer text-[#173460] text-2xl ' : 'font-medium transition text-xl cursor-pointer '}
                        >
                            Фотогалерея
                        </div>
                        <div onClick={() => setTab(1)}
                             className={tab === 1 ? 'font-medium cursor-pointer text-[#173460] text-2xl  ml-4 ' : 'font-medium ml-4 transition text-xl cursor-pointer'}
                        >
                            Видео
                        </div>
                    </div>

                    <ToAll path={tab === 0 ? '/photo' : '/video'}>{tab === 0 ? 'Все фото' : 'Все видео'}</ToAll>
                </div>

                <div className='flex flex-wrap justify-between'>
                    {homeMedia.map((i) => (
                        <PhotoCard key={i._id} loading={loader} {...i}/>
                    ))}
                </div>
            </div>
        </div>
    );
};
