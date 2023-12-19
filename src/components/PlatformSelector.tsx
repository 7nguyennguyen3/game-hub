import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronCompactDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronCompactDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((data) => (
          <MenuItem onClick={() => onSelectPlatform(data)} key={data.id}>
            {data.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
