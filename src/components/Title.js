import { Box, Text } from "@chakra-ui/react";

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
      <Text>SPLI</Text>
      <Text>TTER</Text>
    </Box>
  );
};

export default Title;
