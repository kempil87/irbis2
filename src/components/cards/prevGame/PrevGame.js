import React from 'react';

export const PrevGame = ({matchDay}) => {
    return (
        <div className='prev-game w-full hover:shadow-xl transition bg-[#fff] p-6'>
            <h6 className='w-full text-center font-medium text-lg'>Предыдущий матч</h6>
            {matchDay.map((match) => (
                <div key={match._id}>
                    {match.value === "Предыдущий" && (
                        <div>
                            <div className='flex flex-col justify-center'>
                                <div className='text-center'>{match.date}</div>
                                <div className='font-medium text-center'>{match.league}</div>
                                <div className='font-medium text-center'>{match.place}</div>
                            </div>
                            <div className='flex justify-between md:px-6 lg:px-12 '>
                                <div className='flex flex-col items-center w-1/3 mt-3'>
                                    <img width={54} className='object-cover' src={match.guestLogo}/>
                                    <div
                                        className='text-center mt-5 mb-1 font-bold tracking-widest uppercase'>{match.guestTeam}</div>
                                    <div className='text-center'>{match.guestCity}</div>
                                </div>
                                <div className='flex items-center flex-col justify-center'>
                                    <div className='text-4xl font-medium italic'>{match.scoreGuest} : {match.scoreHome}</div>
                                    <></>
                                </div>
                                <div className='flex flex-col items-center w-1/3 mt-3'>
                                    <img width={54} className='object-cover' src={match.homeLogo}/>
                                    <div
                                        className='text-center mt-5 mb-1 font-bold tracking-widest uppercase'>{match.homeTeam}</div>
                                    <div className='text-center'>{match.homeCity}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
