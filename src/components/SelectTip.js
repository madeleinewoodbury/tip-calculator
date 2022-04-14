import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import TipButton from "./TipButton";

const SelectTip = () => {
  return (
    <Box>
      <Text fontSize='15px' marginBottom='8px'>
        Select Tip %
      </Text>
      <SimpleGrid columns={3} spacing='10px'>
        <TipButton tip='5%' />
        <TipButton tip='10%' />
        <TipButton tip='15%' />
        <TipButton tip='25%' />
        <TipButton tip='50%' />
        <TipButton custom />
      </SimpleGrid>
    </Box>
  );
};

export default SelectTip;
