import getCroppedImageUrl from '../services/image-url';
import { Button, HStack, Image, Text } from '@chakra-ui/react';
import { Genre } from '../models/genre';

interface Props {
  genre: Genre;
  onSelectedGenre: (genre: Genre) => void;
}

const GenreListItem = ({ genre, onSelectedGenre }: Props) => {
  return (
    <HStack>
      <Image
        boxSize="32px"
        borderRadius={8}
        src={getCroppedImageUrl(genre.image_background)}
      />
      <Button
        onClick={() => onSelectedGenre(genre)}
        fontSize={'lg'}
        variant="link"
      >
        {genre.name}
      </Button>
    </HStack>
  );
};

export default GenreListItem;
