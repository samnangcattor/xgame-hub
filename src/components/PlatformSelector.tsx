import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../models/game';

interface Props {
  selectedPlatform: Platform | null;
  onSelectedPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectedPlatform }: Props) => {
  const { data: plateforms, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : 'Platform'}
      </MenuButton>
      <MenuList overflowY="scroll" height="300px">
        {plateforms.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectedPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
