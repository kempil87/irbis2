import React, {useEffect, useState} from 'react';
import {Table, Typography} from "antd";
import {api} from "../../api/axios";

export const TableChampionship = () => {
    const [table, setTable] = useState([]);


    const getTable = () => {
        api.get('/table').then((res) => {
            // console.log(res.data)
            setTable(res.data)
        })
    }

    useEffect(() => {
        getTable()
    }, [])

    const columns = [
        {
            title: '№',
            dataIndex: 'key',
            key: 'key',
            align: 'center',
            width: 40,
            showSorterTooltip: false,
            sorter: (a, b) => b.key - a.key,
            render: (text, item, idx) => (<div>{idx + 1}</div>)
        },
        {
            title: 'Клуб',
            dataIndex: 'nameTeam',
            key: 'nameTeam',
            align: 'center',
            showSorterTooltip: false,
            width: 120,
            render: (text, item, idx) => (
                <div>
                    {text === 'ИРБИС' ?
                        <div className='flex items-center space-x-2'>
                            <img alt={text} width={32} className=' object-cover' src={item.logoTeam}/>
                            <div className='text-amber-600'>{text}</div>
                        </div>
                        : <div className='flex items-center space-x-2'>
                            <img alt={text} width={32} className=' object-cover rounded-full' src={item.logoTeam}/>
                            <div className=''>{text}</div>
                        </div>
                    }
                </div>
            )
        },
        {
            title: 'И',
            dataIndex: 'games',
            key: 'games',
            align: 'center',
            showSorterTooltip: false,
            sorter: (a, b) => b.games - a.games,
            width: 30
        },
        {
            title: 'В',
            dataIndex: 'wins',
            key: 'wins',
            align: 'center',
            showSorterTooltip: false,
            sorter: (a, b) => b.wins - a.wins,
            width: 30
        },
        {
            title: 'ЗМ',
            dataIndex: 'goalBall',
            key: 'goalBall',
            align: 'center',
            showSorterTooltip: false,
            sorter: (a, b) => b.goalBall - a.goalBall,
            width: 30
        },
        {
            title: 'ПМ',
            dataIndex: 'missBall',
            key: 'missBall',
            align: 'center',
            showSorterTooltip: false,
            sorter: (a, b) => b.missBall - a.missBall,
            width: 30
        },
        {
            title: 'П',
            dataIndex: 'loss',
            key: 'loss',
            align: 'center',
            showSorterTooltip: false,
            sorter: (a, b) => b.loss - a.loss,
            width: 30
        },
        {
            title: 'О',
            dataIndex: 'score',
            key: 'score',
            align: 'center',
            showSorterTooltip: false,
            sorter: (a, b) => b.score - a.score,
            width: 30
        },
    ];

    return (
        <div className='px-2'>
            <div className="flex flex-col md:flex-row items-center justify-between bg-[#fafafa] px-3">
                <Typography.Title className='mt-3 text-black' level={4}>Турнирная таблица</Typography.Title>
                <span className='font-medium'>Сезон 2022-2023</span>
            </div>

            <Table
                sticky
                columns={columns}
                dataSource={table.sort((a,b) => b.score - a.score).map((i, idx) => ({...i, key: idx}))}
                // loading={loading}
                scroll={{x: 600}}
                pagination={false}
            />
        </div>
    );
};
