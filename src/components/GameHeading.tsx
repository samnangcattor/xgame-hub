import { Heading } from '@chakra-ui/react';
import { GameQuery, Platform } from '../models/game';
import { Genre } from '../models/genre';

interface Props {
  gameQuery: GameQuery;
  genres: Genre[];
  platforms: Platform[];
}

const GameHeading = ({ gameQuery, genres, platforms }: Props) => {
  const { genreId, platformId } = gameQuery;
  const genre = genres.find((genre) => genre.id === genreId);
  const platform = platforms.find((platform) => platform.id === platformId);
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as="h1" marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
