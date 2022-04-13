import { Box } from "@chakra-ui/react";
import dollar from "../images/icon-dollar.svg";
import FormInput from "./FormInput";

const Form = () => {
  return (
    <Box as='form' width='50%' padding='10px' color='cyan.300'>
      <FormInput label='Bill' icon={dollar} altText='dollar sign' />
    </Box>
  );
};

export default Form;
