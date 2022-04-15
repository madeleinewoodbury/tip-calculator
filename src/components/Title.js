import { Box, Image } from "@chakra-ui/react";
import logo from "../images/logo.svg";

const Title = () => {
  return (
    <Box as='header' paddingY='40px'>
      <Image width='75px' src={logo} alt='SPLITTER logo' />
    </Box>
  );
};

export default Title;
