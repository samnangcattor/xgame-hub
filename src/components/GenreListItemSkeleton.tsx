import { HStack, SkeletonText, Skeleton, Box } from '@chakra-ui/react';

const GenreListItemSkeleton = () => {
  return (
    <HStack>
      <Skeleton borderRadius={8} overflow="hidden" height="32px" width="32px" />
      <SkeletonText noOfLines={2} spacing="1" width="68%" />
    </HStack>
  );
};

export default GenreListItemSkeleton;
