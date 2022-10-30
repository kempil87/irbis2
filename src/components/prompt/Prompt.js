import React, {useState} from 'react';
import './Prompt.css'

export const Prompt = () => {
    const [prompt, setPrompt] = useState(false);

    const promptItem = [
        {letter:'И',
            desc:'Количество проведенных игр'
        },
        {letter:'В',
            desc:'Выигрыши в основное время'
        },
        // {letter:'ОТВ',
        //     desc:'Выигрыши в овертайме'
        // },
        {letter:'П',
            desc:'Проигрыши в основное время'
        },
        // {letter:'ОТП',
        //     desc:'Проигрыши в овертайме'
        // },
        {letter:'ЗМ',
            desc:'Забитые мячи'
        },
        {letter:'ПМ',
            desc:'Пропущенные мячи'
        },
        {letter:'О',
            desc:'Количество набранных очков'
        },
    ]

    return (
        <>
            <div className='my-5 lg:my-5 h-px bg-gradient-to-r from-[#3f414b00] via-[#173460] to-[#3f414b00]'/>
            {!prompt ? (
                <>
                    <div className='flex align-items-center justify-center  pb-12'>
                        <h6 onClick={() => setPrompt(true)} className='text-black opacity-80 hover:opacity-100 cursor-pointer'>
                            Развернуть подсказку
                        </h6>
                    </div>
                </>
            ) : (
                <div className='flex align-items-center justify-center cursor-pointer pb-6'>
                    <h6  onClick={() => setPrompt(false)} className='text-black opacity-80 hover:opacity-100 cursor-pointer'>
                        Свернуть подсказку
                    </h6>
                </div>
            )}
            <div className={prompt ? ' flex prompt-wrap visible opacity-100 transition':'hidden prompt-wrap invisible opacity-0 transition'}>
                <div className='w-full flex flex-wrap mt-3 justify-center'>
                    {promptItem.map((i,index) =>(
                        <div key={index} className='flex flex-col mx-2 justify-center'>
                            <h5 className='text-center'>{i.letter}</h5>
                            <p style={{fontSize:13,color:"black"}}>{i.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
