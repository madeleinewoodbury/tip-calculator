import { Box } from "@chakra-ui/react";
import dollar from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";
import FormInput from "./FormInput";
import SelectTip from "./SelectTip";

const Form = ({ formData, handleChange }) => {
  return (
    <Box
      as='form'
      width='50%'
      padding='10px 20px'
      color='cyan.300'
      marginRight='20px'
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
    >
      <FormInput
        label='Bill'
        icon={dollar}
        altText='dollar sign'
        name='bill'
        formData={formData}
        handleChange={handleChange}
      />
      <SelectTip handleChange={handleChange} />
      <FormInput
        label='Number of People'
        icon={person}
        altText='person icon'
        name='people'
        formData={formData}
        handleChange={handleChange}
      />
    </Box>
  );
};

export default Form;
