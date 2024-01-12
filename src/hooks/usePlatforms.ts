import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platform';
import { FetchResponse } from '../models/data';
import { Platform } from '../models/game';
import HttpClient from '../services/http-client';

const httpClient = new HttpClient<Platform>('/platforms/list/parents');

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: httpClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: platforms.length, results: platforms, next: null },
  });
};

export default usePlatforms;
