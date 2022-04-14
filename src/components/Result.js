import { Box } from "@chakra-ui/react";
import Amount from "./Amount";

const Result = () => {
  return (
    <Box
      width='50%'
      height='100%'
      bg='cyan.600'
      borderRadius='15px'
      padding='30px'
    >
      <Amount text='Tip Amount' amount='0.00' />
      <Amount text='Total' amount='0.00' />
    </Box>
  );
};

export default Result;
