import { List } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import GenreListItemSkeleton from './GenreListItemSkeleton';
import GenreListItem from './GenreListItem';
import GenreContainer from './GenreContainer';
import { Genre } from '../models/genre';

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletons.map((i) => (
          <GenreContainer key={i}>
            <GenreListItemSkeleton />
          </GenreContainer>
        ))}
      {!isLoading &&
        genres.map((genre) => (
          <GenreContainer key={genre.id}>
            <GenreListItem genre={genre} onSelectedGenre={onSelectedGenre} />
          </GenreContainer>
        ))}
    </List>
  );
};

export default GenreList;
