import './Loader.css'
const logo = "https://xn--m1agla.xn--p1ai/wp-content/uploads/2021/12/Irbis-111x128.png"

export const Loader = () => {
    return (
        <div className='loader flex items-center justify-center h-screen w-full'>
            <img className='loader-image' alt='лого' src={logo}/>
        </div>
    );
};
