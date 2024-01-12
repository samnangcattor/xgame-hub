import genres from '../data/genre';
import { FetchResponse } from '../models/data';
import { Genre } from '../models/genre';
import { useQuery } from '@tanstack/react-query';
import HttpClient from '../services/http-client';
import ms from 'ms';

const httpClient = new HttpClient<Genre>('/genres');

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: httpClient.getAll,
    staleTime: ms('24h'),
    initialData: { count: genres.length, results: genres, next: null },
  });
};

export default useGenres;
