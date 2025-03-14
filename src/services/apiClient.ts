import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3a05b61b200f4fc0a9a0c5097707ea8e",
  },
});

class APIClient<T> {
  endpoint: string;
  requestParams?: AxiosRequestConfig<any>;

  constructor(endpoint: string, requestParams?: AxiosRequestConfig<any>) {
    this.endpoint = endpoint;
    this.requestParams = requestParams;
  }

  getAll = () =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, this.requestParams)
      .then((res) => res.data);
}

export default APIClient;
