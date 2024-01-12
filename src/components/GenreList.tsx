import { Heading, List } from '@chakra-ui/react';
import GenreListItem from './GenreListItem';
import GenreContainer from './GenreContainer';
import { Genre } from '../models/genre';

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenreId: number | null;
  genres: Genre[];
}

const GenreList = ({ genres, selectedGenreId, onSelectedGenre }: Props) => {
  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
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
