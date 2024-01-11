import { useInfiniteQuery } from '@tanstack/react-query';
import { Game, GameQuery } from '../models/game';
import { FetchResponse } from '../models/data';
import HttpClient from '../services/http-client';

const httpClient = new HttpClient<Game>('/games');

const useGames = (gameQuery: GameQuery | null) => {
  // return useQuery<FetchResponse<Game>, Error>({
  //   queryKey: ['games', params],
  //   queryFn: () => httpClient.getAll({ params }),
  // });
  const fetchGames = ({ pageParam }: { pageParam: unknown }) =>
    httpClient.getAll({
      params: {
        genres: gameQuery?.genre?.id,
        parent_platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.sortOrder?.value,
        search: gameQuery?.searchText,
        page: pageParam,
      },
    });

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: fetchGames,
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next ? allPage.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useGames;
