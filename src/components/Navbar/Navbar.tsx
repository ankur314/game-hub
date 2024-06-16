import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";

const Navbar = () => {
  return (
    // Layout component Horizontally. If you add one component after another, they will appear horizontally right next to each other
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Text>Navbar</Text>
    </HStack>
  );
};

export default Navbar;
