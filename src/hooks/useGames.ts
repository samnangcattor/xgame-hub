import { useQuery } from '@tanstack/react-query';
import { Game, GameQuery } from '../models/game';
import apiClient from '../services/api-client';
import { FetchResponse } from '../models/data';

const useGames = (gameQuery: GameQuery | null) => {
  const fetchGames = () =>
    apiClient
      .get<FetchResponse<Game>>('/games', {
        params: {
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sortOrder?.value,
          search: gameQuery?.searchText,
        },
      })
      .then((res) => res.data);

  return useQuery<FetchResponse<Game>, Error>({
    queryKey: [
      'games',
      {
        genres: gameQuery?.genre?.id,
        parent_platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.sortOrder?.value,
        search: gameQuery?.searchText,
      },
    ],
    queryFn: fetchGames,
  });
};

export default useGames;
