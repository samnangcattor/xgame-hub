import { Game } from '../models/game';
import { Genre } from '../models/genre';
import useData from './useData';

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>('/games', { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
