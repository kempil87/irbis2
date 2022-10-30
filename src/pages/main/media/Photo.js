import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {Image} from "antd";
import {api} from "../../../api/axios";

export const Photo = () => {
    const {id} = useParams()

    const [media, setMedia] = useState([])
    const [loader, setLoader] = useState(true);

    const getMedia = () => {
        api.get(`/media/${id}`).then((res) => {
            setMedia(res.data)
            setLoader(false)
        })
    }

    useEffect(() => {
        getMedia()
    }, [id])

    return (
        <div className='container m-auto'>
            {id}
        </div>
    );
};
