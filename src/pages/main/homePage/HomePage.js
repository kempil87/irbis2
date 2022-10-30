import React from 'react';
import {News} from "../../../components/news/News";
import './HomePage.css'
import {Championship} from "../../../components/championship/Championship";
import {TopPlayers} from "../../../components/topPlayers/TopPlayers";
import {Media} from "../../../components/media/Media";
import {Shop} from "../../../components/shop/Shop";

export const HomePage = () => {
    return (
        <div>
            <News/>
            <Championship/>
            <TopPlayers/>
            <Media/>
            <Shop/>
        </div>
    );
};
