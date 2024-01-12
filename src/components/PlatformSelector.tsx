import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { Platform } from '../models/game';

interface Props {
  selectedPlatformId: number | null;
  onSelectedPlatform: (platform: Platform) => void;
  platforms: Platform[];
}

const PlatformSelector = ({
  platforms,
  selectedPlatformId,
  onSelectedPlatform,
}: Props) => {
  const selectedPlatform = platforms.find(
    (platform) => platform.id === selectedPlatformId
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : 'Platform'}
      </MenuButton>
      <MenuList overflowY="scroll" height="300px">
        {platforms.map((platform) => (
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
