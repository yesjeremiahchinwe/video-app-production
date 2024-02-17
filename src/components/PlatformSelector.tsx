import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store/gameQueryStore";


const PlatformSelector = () => {
  const platformId = useGameQueryStore(s => s.gameQuery.platformId)
  const platform = usePlatform(platformId)

  const { data: platforms, error } = usePlatforms()
  const setPlatformId = useGameQueryStore(s => s.setPlatformId)
  
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        { platform?.name || "Platform" }
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem key={platform.id} onClick={() => setPlatformId(platform.id)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
