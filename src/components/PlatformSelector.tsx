import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import {
  BsChevronBarDown,
  BsChevronCompactDown,
  BsGraphDownArrow,
} from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronCompactDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((data) => (
          <MenuItem key={data.id}>{data.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
