import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

const configs: AxiosRequestConfig = {
  baseURL: "http://localhost:9119/api/v1"
};

const instance: AxiosInstance = axios.create(configs);

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  return {
    ...config,
    headers: {
      "x-projectkey": 1234
    }
  };
});

export default instance;
