import { Box } from '@chakra-ui/react';
import { GAME_CARD_WIDTH } from '../models/game';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      maxWidth={GAME_CARD_WIDTH.MAX}
      minWidth={GAME_CARD_WIDTH.MIN}
      borderRadius={10}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
