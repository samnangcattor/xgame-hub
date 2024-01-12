import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { Platform } from '../models/game';
import usePlatform from '../hooks/usePlatform';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
  selectedPlatformId: number | null;
  onSelectedPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({
  selectedPlatformId,
  onSelectedPlatform,
}: Props) => {
  const { data: platforms } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : 'Platform'}
      </MenuButton>
      <MenuList overflowY="scroll" height="300px">
        {platforms?.results.map((platform) => (
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
