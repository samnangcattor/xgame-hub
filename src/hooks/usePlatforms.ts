import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platform';
import apiClient from '../services/api-client';
import { FetchResponse } from '../models/data';
import { Platform } from '../models/game';

const usePlatforms = () => {
  const fetchPlatforms = () =>
    apiClient
      .get<FetchResponse<Platform>>('/platforms/list/parents')
      .then((res) => res.data);

  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;
