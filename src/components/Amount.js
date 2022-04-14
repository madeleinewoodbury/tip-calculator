import { Box, Text } from "@chakra-ui/react";

const Amount = ({ text, amount }) => {
  return (
    <Box
      display='flex'
      width='100%'
      justifyContent='space-between'
      alignItems='center'
      marginBottom='20px'
    >
      <Box>
        <Text fontSize='sm' color='white'>
          {text}
        </Text>
        <Text fontSize='xs' color='cyan.300' paddingTop='5px'>
          / person
        </Text>
      </Box>
      <Box>
        <Text fontSize='4xl' color='cyan.500'>
          ${amount}
        </Text>
      </Box>
    </Box>
  );
};

export default Amount;
