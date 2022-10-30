import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {ConfigProvider} from 'antd';
import ru_RU from 'antd/lib/locale/ru_RU';
import './index.css'
import 'antd/dist/antd.min.css';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";

const store = setupStore();

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: Number.POSITIVE_INFINITY,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            retry: 0,
            staleTime: Number.POSITIVE_INFINITY,
        },
    },
});


ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Provider store={store}>
                <ConfigProvider locale={ru_RU}>
                    <App/>
                </ConfigProvider>
            </Provider>
        </BrowserRouter>
    </QueryClientProvider>,
    document.getElementById('root')
);

