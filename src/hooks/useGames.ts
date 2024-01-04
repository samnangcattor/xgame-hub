import { Game, GameQuery } from '../models/game';
import useData from './useData';

const useGames = (gameQuery: GameQuery | null) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery?.genre?.id,
        platforms: gameQuery?.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
