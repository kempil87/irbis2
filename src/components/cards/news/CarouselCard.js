import {Link} from "react-router-dom";
import './CarouselCard.css'

export const CarouselCard = ({id,title,image}) => {
    return (
        <div className='relative'>
            <div className=''>
                <p className='absolute news-img-title'>{title}</p>
                <Link to={`/news/${id}`} className='absolute custom-button'>Смотреть</Link>
                <div className='news-img-back'/>
                <img className='w-full h-screen news-img' key={id} alt='' src={image}/>
            </div>
        </div>
    );
};
