import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({ baseURL: "http://localhost:5000/api" });

class APIClient<T> {
  endpoint: string;
  requestParams?: AxiosRequestConfig<any>;

  constructor(endpoint: string, requestParams?: AxiosRequestConfig<any>) {
    this.endpoint = endpoint;
    this.requestParams = requestParams;
  }

  get = () =>
    axiosInstance
      .get<T>("", { params: { endpoint: this.endpoint } })
      .then((res) => res.data);

  getAll = () =>
    axiosInstance
      .get<FetchResponse<T>>("", {
        params: { endpoint: this.endpoint, ...this.requestParams },
      })
      .then((res) => res.data);
}

export default APIClient;
