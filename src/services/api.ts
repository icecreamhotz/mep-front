import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

const configs: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_BASEURL_ENDPOINT
};

const instance: AxiosInstance = axios.create(configs);

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  return {
    ...config
  };
});

export default instance;
