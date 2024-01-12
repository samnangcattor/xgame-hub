import { Heading } from '@chakra-ui/react';
import { GameQuery, Platform } from '../models/game';
import { Genre } from '../models/genre';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';
import usePlatform from '../hooks/usePlatform';
import useGenre from '../hooks/useGenre';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { genreId, platformId } = gameQuery;
  const platform = usePlatform(platformId);
  const genre = useGenre(genreId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as="h1" marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
