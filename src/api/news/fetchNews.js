import {apiRequest} from "../axios";

export const fetchNews = async () :Promise => {
    apiRequest({ url: '/news'})
}
