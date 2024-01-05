import getCroppedImageUrl from '../services/image-url';
import { Button, HStack, Image, Text, Tooltip } from '@chakra-ui/react';
import { Genre } from '../models/genre';

interface Props {
  genre: Genre;
  onSelectedGenre: (genre: Genre) => void;
  isSelected: boolean;
}

const GenreListItem = ({ isSelected, genre, onSelectedGenre }: Props) => {
  return (
    <HStack>
      <Image
        boxSize="32px"
        borderRadius={8}
        objectFit="cover"
        src={getCroppedImageUrl(genre.image_background)}
      />
      <Button
        onClick={() => onSelectedGenre(genre)}
        fontSize={'md'}
        variant="link"
        colorScheme={isSelected ? 'blue' : 'white'}
      >
        <Tooltip label={genre.name}>
          <Text textOverflow="ellipsis" overflow="hidden">
            {genre.name}
          </Text>
        </Tooltip>
      </Button>
    </HStack>
  );
};

export default GenreListItem;
