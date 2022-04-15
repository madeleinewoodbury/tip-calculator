import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import TipButton from "./TipButton";

const SelectTip = ({ handleChange }) => {
  const values = [5, 10, 15, 25, 50, ""];
  return (
    <Box marginY='30px'>
      <Text fontSize='15px' marginBottom='8px'>
        Select Tip %
      </Text>
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing='10px'>
        {values.map((val) => (
          <TipButton key={val} value={val} handleChange={handleChange} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SelectTip;
