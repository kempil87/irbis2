import './NextGame.css'

export const NextGame = ({matchDay}) => {

    return (
        <div className='next-game relative hover:shadow-2xl transition w-full bg-[#173460] p-6'>
            <h6 className='w-full text-center font-medium text-lg text-white'>Следующий матч</h6>
            {matchDay.map((match) => (
                <div key={match._id}>
                    {match.value === "следующий" && (
                        <>
                            <div className='flex flex-col justify-center'>
                                <div className='text-center text-white'>{match.date}</div>
                                <div className='text-center font-medium text-white'>{match.league}</div>
                                <div className='text-center font-medium text-white'>{match.place}</div>
                            </div>
                            <div className='flex justify-between md:px-6 lg:px-12'>
                                <div className='flex flex-col items-center w-1/3 mt-3'>
                                    <img width={54} className='object-cover' src={match.guestLogo}/>
                                    <div className='text-center mt-5 mb-1 font-bold tracking-widest uppercase text-white'>{match.guestTeam}</div>
                                    <div className='text-center text-white opacity-80'>{match.guestCity}</div>
                                </div>
                                <div className='flex items-center flex-col justify-center'>
                                    <div className='text-3xl bg-blue-200 rounded-xl px-2 py-1 tracking-widest font-medium uppercase text-white'>vs</div>
                                    <div className='text-2xl tracking-widest font-medium uppercase text-white'>- : -</div>
                                </div>
                                <div className='flex flex-col items-center w-1/3 mt-3'>
                                    <img width={54} className='object-cover' src={match.homeLogo}/>
                                    <div className='text-center mt-5 mb-1 font-bold tracking-widest uppercase text-white'>{match.homeTeam}</div>
                                    <div className='text-center text-white opacity-80'>{match.homeCity}</div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};
