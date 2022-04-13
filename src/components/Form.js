import { Box, SimpleGrid } from "@chakra-ui/react";
import dollar from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";
import FormInput from "./FormInput";
import TipButton from "./TipButton";

const Form = () => {
  return (
    <Box
      as='form'
      width='50%'
      padding='10px 20px'
      color='cyan.300'
      marginRight='20px'
    >
      <FormInput label='Bill' icon={dollar} altText='dollar sign' />
      <SimpleGrid columns={3} spacing='10px'>
        <TipButton tip='5%' />
        <TipButton tip='10%' />
        <TipButton tip='15%' />
        <TipButton tip='25%' />
        <TipButton tip='50%' />
        <TipButton custom />
      </SimpleGrid>
      <FormInput label='Number of People' icon={person} altText='person icon' />
    </Box>
  );
};

export default Form;
