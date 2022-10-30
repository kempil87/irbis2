import React, {useEffect, useState} from 'react';
import {Typography} from "antd";
import {TopPlayerCard} from "../cards/topPlayerCard/TopPlayerCard";
import {api} from "../../api/axios";
import {Link} from "react-router-dom";
import {ToAll} from "../toAll/ToAll";
import {PageTitle} from "../pageTitle/PageTitle";

export const TopPlayers = () => {
    const [assists, setAssists] = useState([]);
    const [snipers, setSnipers] = useState([]);
    const [loader, setLoader] = useState(true);
    const [tab, setTab] = useState(0);


    const getTopPlayers = () => {
        setLoader(true)
        api.get('/club').then((res) => {
            setAssists(res.data.sort((a, b) => Number(b?.assist) - Number(a?.assist)).filter((n) => n.position !== 'Вратарь'))
            setSnipers(res.data.sort((a, b) => Number(b?.goals) - Number(a?.goals)).filter((n) => n.position !== 'Вратарь'))
            setLoader(false)
        })
    }


    useEffect(() => {
        getTopPlayers()
    }, [tab])

    return (
        <div className='bg-[#f3f3f3]'>
            <div className="container m-auto py-5">
                <div className="flex items-center justify-between">
                    <div className='px-3 md:px-0 space-x-4 flex items-center'>
                        <PageTitle title='Лучшие игроки'/>
                        <div onClick={() => setTab(0)}
                             className={tab === 0 ? 'font-medium cursor-pointer text-[#173460] border-b border-black ' : 'font-medium transition  cursor-pointer'}
                        >
                            Снайперы
                        </div>
                        <div onClick={() => setTab(1)}
                             className={tab === 1 ? 'font-medium cursor-pointer text-[#173460] border-b border-black ' : 'font-medium transition cursor-pointer'}
                        >
                            Ассистенты
                        </div>
                    </div>

                    <ToAll path={'/players'}>Все игроки</ToAll>
                </div>
            </div>
            {tab === 0 ? (
                <div  className='overflow-x-auto bg-[#E8ECF1] '>
                    <div style={{minWidth: 1200}}
                         className='flex container space-x-4 m-auto flex-row justify-between'>
                        {snipers.map((i) => (
                            <TopPlayerCard key={i._id} loader={loader} {...i}/>
                        ))}
                    </div>
                </div>
            ) : (
                <div className='overflow-x-auto bg-[#E8ECF1] '>
                    <div style={{minWidth: 1200}}
                         className='flex container space-x-4 m-auto flex-row justify-between'>
                        {assists.map((i) => (
                            <TopPlayerCard key={i._id}  loader={loader} {...i}/>
                        ))}
                    </div>
                </div>
            )}
            <Link className='md:hidden bg-[#E8ECF1] font-medium border text-[#173460] flex justify-center py-4' to='/players'>Все игроки</Link>
        </div>
    );
};
