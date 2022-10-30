import React, {useState} from 'react';
import {PrevGame} from "../cards/prevGame/PrevGame";
import {NextGame} from "../cards/nextGame/NextGame";
import {TableChampionship} from "../table/TableChampionship";
import {api} from "../../api/axios";
import {useEffect} from "react";
import {Prompt} from "../prompt/Prompt";
import {Card} from "antd";

export const Championship = () => {
    const [matchDay, setMatchDay] = useState([]);
    const [loader, setLoader] = useState(true);

    const getMatch = () => {
        api.get('/championship').then((res) => {
            setMatchDay(res.data)
        })
    }

    useEffect(() => {
        getMatch()
    }, [])

    return (
        <div className='grid-wrapper'>
            <div className="container m-auto">
                <div className='grid grid-cols-1 lg:grid-cols-2 py-14 gap-4'>
                    <div>
                        <NextGame matchDay={matchDay}/>
                        <PrevGame matchDay={matchDay}/>
                    </div>
                    <div>
                        <TableChampionship/>
                    </div>
                </div>
                <Prompt />
            </div>
        </div>
    );
};
