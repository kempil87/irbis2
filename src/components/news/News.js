import React, {useEffect, useState} from 'react';
import {Carousel} from "antd";
import {CarouselCard} from "../cards/news/CarouselCard";
// import {useQuery} from "@tanstack/react-query";
// import {fetchNews} from "../../api/news/fetchNews";
import {api} from "../../api/axios";
import {Loader} from "../customLoader/Loader";
import {fetchNews} from "../../api/news/fetchNews";
import {useQuery} from "@tanstack/react-query";



export const News = () => {
    const [homeNews, setHomeNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {data,error} = useQuery(['news'],() => fetchNews())

    useEffect(() => {
        setIsLoading(true)
        api.get('/news').then((res) => {

            setHomeNews(res.data.reverse())
            setIsLoading(false)
        })
    }, [])

    return (
        <div className=''>
            { isLoading ? (
                <Loader />
            ) : (
                <Carousel
                    // centerMode={true}
                    swipeToSlide={true}
                    draggable={true}
                    // autoplay
                    adaptiveHeight
                    focusOnSelect={true}
                >
                    {homeNews?.slice(1, 3).map((i) => (
                        <CarouselCard key={i._id} title={i.title} image={i.image} id={i._id}/>
                    ))}
                </Carousel>
            )}
        </div>
    )
}
