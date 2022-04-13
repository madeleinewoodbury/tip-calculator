import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";

const FormInput = ({ label, icon, altText }) => {
  return (
    <FormControl marginY='10px'>
      <FormLabel fontSize='15px'>{label}</FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          color='cyan.300'
          children={<img src={icon} alt={altText} />}
        />
        <Input
          type='number'
          focusBorderColor='cyan.500'
          textAlign='right'
          fontSize='24px'
          color='cyan.600'
          bg='cyan.100'
        />
      </InputGroup>
    </FormControl>
  );
};

export default FormInput;
