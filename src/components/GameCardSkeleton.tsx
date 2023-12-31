import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
import { GAME_CARD_SKELETON_WIDTH } from '../models/game';

const GameCardSkeleton = () => {
  return (
    <Card
      minWidth={GAME_CARD_SKELETON_WIDTH.MIN}
      maxWidth={GAME_CARD_SKELETON_WIDTH.MAX}
      borderRadius={10}
      overflow="hidden"
    >
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
