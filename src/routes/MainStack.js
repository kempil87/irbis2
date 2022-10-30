import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import {MAIN_ROUTES} from "./index";
import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import {Partners} from "../components/partners/Partners";

export const MainStack = () => {
    const location = useLocation()

    return (
        <div className='flex flex-col h-full'>
            <div className="main">
                <Header/>
                <div style={{paddingTop: location.pathname !== '/' ? 130 : 0}}>
                    <Routes>
                        {MAIN_ROUTES.map(({component, path}) => (
                            <Route key={path} element={component} path={path}/>
                        ))}
                    </Routes>
                </div>
            </div>

            <Partners/>
            <Footer/>
        </div>
    );
};