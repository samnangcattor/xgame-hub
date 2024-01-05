import { Heading, List } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import GenreListItem from './GenreListItem';
import GenreContainer from './GenreContainer';
import { Genre } from '../models/genre';

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data: genres } = useGenres();

  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
          <GenreContainer key={genre.id}>
            <GenreListItem
              isSelected={genre.id === selectedGenre?.id}
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
