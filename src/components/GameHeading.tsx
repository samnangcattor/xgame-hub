import { Heading } from '@chakra-ui/react';
import { GameQuery, Platform } from '../models/game';
import { Genre } from '../models/genre';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { genreId, platformId } = gameQuery;

  const { data: genres } = useGenres();
  const genre = genres.results.find((g) => g.id === genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms.results.find((p) => p.id === platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as="h1" marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
