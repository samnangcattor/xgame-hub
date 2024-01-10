import genres from '../data/genre';
import { FetchResponse } from '../models/data';
import { Genre } from '../models/genre';
import apiClient from '../services/api-client';
import { useQuery } from '@tanstack/react-query';

const useGenres = () => {
  const fetchGenre = () =>
    apiClient.get<FetchResponse<Genre>>('/genres').then((res) => res.data);

  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: fetchGenre,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
