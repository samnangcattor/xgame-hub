import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
import { GAME_CARD_WIDTH } from '../models/game';

const GameCardSkeleton = () => {
  return (
    <Card width={GAME_CARD_WIDTH} borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
