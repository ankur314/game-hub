import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    // Layout component Horizontally. If you add one component after another, they will appear horizontally right next to each other
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
