import React from 'react';
import { Game } from '../models/game';
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const platforms = game.parent_platforms.map(({ platform }) => platform);

  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList platforms={platforms}></PlatformIconList>
      </CardBody>
    </Card>
  );
};

export default GameCard;
