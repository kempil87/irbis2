import React from 'react';
import {PageTitle} from "../pageTitle/PageTitle";

export const Partners = () => {


    return (
        <div className='partners pt-8 bg-[#16171d]'>
            <div className="container m-auto text-white">
                {/*<div className='my-6 lg:mb-16 h-px bg-gradient-to-r from-[#3f414b00] via-[#3F414B] to-[#3f414b00]'/>*/}
                <div className='text-center text-lg'>Официальные партнеры ФБК Ирбис</div>

                <div className="flex flex-wrap items-center justify-between">
                    <a href="https://www.radiorecord.ru/" target={"_blank"} className="sponsor-item">
                        <img width={130} className="object-cover"
                             src="https://2sticker.ru/wa-data/public/shop/products/04/webp/86/12/1286/images/3604/3604.750.webp"
                             alt='sponsor'/>
                    </a>
                    <a href="https://kelmeshop.ru" target={"_blank"} className="sponsor-item">
                        <img width={130} className="object-cover"
                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Kelme_Logo.svg/640px-Kelme_Logo.svg.png"
                             alt='sponsor'/>
                    </a>
                    <a href="https://suvarionline.ru/" target={"_blank"} className="sponsor-item">
                        <img width={130} className="object-cover"
                             src="http://www.suvari.com.ro/images/thumbs/0000159.png"
                             alt='sponsor'/>
                    </a>

                    <a href="#" target={"_blank"} className="sponsor-item disabled-link">
                        <span className='text-black text-lg font-bold'>PROFOOTBALLSTORE</span>
                    </a>
                    <a href="https://cheerlab.ru/" target={"_blank"} className="sponsor-item">
                        <img width={130} className="object-cover"
                             src="https://sun9-86.userapi.com/impf/fPs6fjB903uOqHquks8__NfohkdyeyudoDilxw/5hyuLg_mwjI.jpg?size=1280x249&quality=95&sign=4ee2abde07f27f7a30bdbff74eb024f5&type=album"
                             alt='sponsor'/>
                    </a>
                </div>
            </div>

            <div className='mt-6  h-0.5 bg-gradient-to-r from-[#3f414b00] via-[#3F414B] to-[#3f414b00]'/>
            <div
                className='w-full py-4 text-white cursor-pointer hover:text-[#616473] transition text-center'
                onClick={() => window.scrollTo(0, 0)}>Наверх
            </div>
            <div className='mb-6 h-px bg-gradient-to-r from-[#3f414b00] via-[#3F414B] to-[#3f414b00]'/>
        </div>
    );
};
