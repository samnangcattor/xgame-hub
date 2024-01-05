import { Game, GameQuery } from '../models/game';
import useData from './useData';

const useGames = (gameQuery: GameQuery | null) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery?.genre?.id,
        platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.sortOrder?.value,
        search: gameQuery?.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
