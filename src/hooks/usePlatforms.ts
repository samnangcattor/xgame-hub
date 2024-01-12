import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platform';
import { FetchResponse } from '../models/data';
import { Platform } from '../models/game';
import HttpClient from '../services/http-client';
import ms from 'ms';

const httpClient = new HttpClient<Platform>('/platforms/list/parents');

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: httpClient.getAll,
    staleTime: ms('24h'),
    initialData: { count: platforms.length, results: platforms, next: null },
  });
};

export default usePlatforms;
