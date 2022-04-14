import { Box, Image } from "@chakra-ui/react";
import logo from "../images/logo.svg";

const Title = () => {
  return (
    <Box
      as='header'
      marginBottom='60px'
      textAlign='center'
      color='cyan.600'
      opacity='0.8'
      letterSpacing='2px'
      fontSize='20px'
    >
      <Image src={logo} alt='' />
    </Box>
  );
};

export default Title;
