import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import TipButton from "./TipButton";

const SelectTip = ({ handleChange }) => {
  return (
    <Box marginY='30px'>
      <Text fontSize='15px' marginBottom='8px'>
        Select Tip %
      </Text>
      <SimpleGrid columns={3} spacing='10px'>
        <TipButton tip='5' handleChange={handleChange} />
        <TipButton tip='10' handleChange={handleChange} />
        <TipButton tip='15' handleChange={handleChange} />
        <TipButton tip='25' handleChange={handleChange} />
        <TipButton tip='50' handleChange={handleChange} />
        <TipButton handleChange={handleChange} custom />
      </SimpleGrid>
    </Box>
  );
};

export default SelectTip;
