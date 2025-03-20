# RAWG Clone

## Overview
A mini clone of the RAWG website that I built to practice front-end development with React 18 and TypeScript, while exploring effective ways to style it using Tailwind CSS 4.  

For state management, I use **React Query** for server state management and **Zustand** for client state management.  

You can access it [here](https://app.netlify.com/sites/rawg-m-clone/configuration/general). However, since I am using a free API key, the website may encounter a network error. If that happens, follow the **Setup** section below to configure your own API key.  

This project was built as a part of [this course](https://codewithmosh.com/p/ultimate-react-part2).  

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
