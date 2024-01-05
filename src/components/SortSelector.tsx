import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectSortOrder: (sortOrder: { value: string; label: string }) => void;
  selectedSortOrder: { value: string; label: string } | null;
}

const SELECTED_BACKGOUND_COLOR = '#ffffff14';

const SortSelector = ({ selectedSortOrder, onSelectSortOrder }: Props) => {
  const sortOrders = [
    { value: '', label: 'Relevacne' },
    { value: '-added', label: 'Date added' },
    { value: '-name', label: 'Name' },
    { value: '-released', label: 'Release data' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {selectedSortOrder ? selectedSortOrder.label : 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map(({ value, label }) => (
          <MenuItem
            onClick={() => onSelectSortOrder({ value, label })}
            key={value}
            bgColor={
              selectedSortOrder?.value === value ? SELECTED_BACKGOUND_COLOR : ''
            }
          >
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
