import { AxiosRequestConfig } from 'axios';
import { FetchResponse } from '../models/data';
import apiClient from './api-client';

class HttpClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return apiClient
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default HttpClient;
