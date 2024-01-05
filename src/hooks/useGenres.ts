import genres from '../data/genre';

const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
