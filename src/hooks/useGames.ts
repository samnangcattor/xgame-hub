import { useQuery } from '@tanstack/react-query';
import { Game, GameQuery } from '../models/game';
import { FetchResponse } from '../models/data';
import HttpClient from '../services/http-client';

const httpClient = new HttpClient<Game>('/games');

const useGames = (gameQuery: GameQuery | null) => {
  const params = {
    genres: gameQuery?.genre?.id,
    parent_platforms: gameQuery?.platform?.id,
    ordering: gameQuery?.sortOrder?.value,
    search: gameQuery?.searchText,
  };

  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', params],
    queryFn: () => httpClient.getAll({ params }),
  });
};

export default useGames;
