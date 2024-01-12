import { Heading, List } from '@chakra-ui/react';
import GenreListItem from './GenreListItem';
import GenreContainer from './GenreContainer';
import { Genre } from '../models/genre';
import useGenres from '../hooks/useGenres';

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenreId: number | null;
}

const GenreList = ({ selectedGenreId, onSelectedGenre }: Props) => {
  const { data: genres } = useGenres();

  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>
      <List>
        {genres?.results.map((genre) => (
          <GenreContainer key={genre.id}>
            <GenreListItem
              isSelected={genre.id === selectedGenreId}
              genre={genre}
              onSelectedGenre={onSelectedGenre}
            />
          </GenreContainer>
        ))}
      </List>
    </>
  );
};

export default GenreList;
