# RAWG Clone

## Overview

This project uses a back-end proxy to securely handle API keys for making requests to the RAWG API. Since the API key provided by RAWG is free, it has a limited number of requests per day. If you exceed the limit, you may need to use your own API key.

## Setup

### 1. Get Your API Key

1. Sign up at [RAWG.io](https://rawg.io/apidocs).
2. Generate your own API key from your account.
3. Copy the API key.

### 2. Update the API Key in the Frontend

Navigate to the `apiClient.ts` file inside the `services` folder and replace the existing API key with the one you obtained from RAWG:

```ts
import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "YOUR_API_KEY_HERE", // Replace this with your RAWG API key
  },
});

class APIClient<T> {
  endpoint: string;
  requestParams?: AxiosRequestConfig<any>;

  constructor(endpoint: string, requestParams?: AxiosRequestConfig<any>) {
    this.endpoint = endpoint;
    this.requestParams = requestParams;
  }

  get = () => axiosInstance.get<T>(this.endpoint).then((res) => res.data);

  getAll = () =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, this.requestParams)
      .then((res) => res.data);
}

export default APIClient;
