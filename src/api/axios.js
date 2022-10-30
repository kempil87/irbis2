import axios from "axios";
import {appConfig} from "../appСonfig";

export const api = axios.create({
  baseURL: appConfig.BASE_URL,
})

axios.interceptors.response.use(
  async (response) => {
    return response;
  },
);

export const apiRequest = async (options) => {
    try {
        // const authToken = localStorage.getItem('authToken');
        const res = await axios.request({
            baseURL: appConfig.BASE_URL,
            ...options
        })
        console.log(res.data,'response')
        return res.data
    } catch (_error) {
        if (_error.response?.status === 401) {
            console.log('err 401')
        }
    }
}

