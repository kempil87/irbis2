import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import './Shop.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useEffect, useState} from "react";
import {api} from "../../api/axios";
import {ProductCard} from "../cards/productCard/ProductCard";
import {PageTitle} from "../pageTitle/PageTitle";

export const Shop = () => {
    const [shopList, setShopList] = useState([]);


    const getShopList = () => {
        api.get('/products').then((res) => {
            setShopList(res.data)
        })
    }


    useEffect(() => {
        getShopList()
    }, [])

    return (
        <div className='bg-[#fff]'>
            <div className='container m-auto py-8'>
               <PageTitle title='Товары ФБК Ирбис'/>

                <Swiper
                    Mousewheel
                    breakpoints={{
                        [780]: {
                            spaceBetween: 30,
                            slidesPerView: 3,
                        },
                        [1000]: {
                            spaceBetween: 30,
                            slidesPerView: 4,
                        },
                        [1300]: {
                            spaceBetween: 30,
                            slidesPerView: 5,
                        },
                    }}
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                >
                    {shopList.map((i) => (
                        <SwiperSlide key={i._id}>
                            <ProductCard key={i._id} {...i}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    );
};
