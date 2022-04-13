import { Box, Center, Text } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Center width='100vw' height='100vh' bg='cyan.200'>
      <Box>
        <Box marginBottom='60px' textAlign='center'>
          <Text>SPLI</Text>
          <Text>TTER</Text>
        </Box>
        <Box width='800px' height='400px' bg='white'>
          Calculator
        </Box>
      </Box>
    </Center>
  );
};

export default Layout;
