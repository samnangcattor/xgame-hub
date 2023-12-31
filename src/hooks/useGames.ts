import { Game } from '../models/game';
import useData from './useData';

const useGames = () => useData<Game>('/games');

export default useGames;
