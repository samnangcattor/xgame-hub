import getCroppedImageUrl from '../services/image-url';
import { HStack, Image, Text } from '@chakra-ui/react';
import { Genre } from '../models/genre';

interface Props {
  genre: Genre;
}

const GenreListItem = ({ genre }: Props) => {
  return (
    <HStack>
      <Image
        boxSize="32px"
        borderRadius={8}
        src={getCroppedImageUrl(genre.image_background)}
      />
      <Text fontSize={'lg'}>{genre.name}</Text>
    </HStack>
  );
};

export default GenreListItem;
