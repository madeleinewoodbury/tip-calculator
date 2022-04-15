import {
  FormControl,
  FormLabel,
  Input,
  InputLeftElement,
  InputGroup,
  Box,
} from "@chakra-ui/react";

const FormInput = ({
  label,
  icon,
  altText,
  name,
  formData,
  handleChange,
  error,
}) => {
  return (
    <FormControl>
      <FormLabel fontSize='15px' display='flex' justifyContent='space-between'>
        <Box as='span'>{label}</Box>
        {error && (
          <Box as='span' fontSize='15px' color='orange'>
            {error}
          </Box>
        )}
      </FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          color='cyan.300'
          children={<img src={icon} alt={altText} />}
        />
        <Input
          type='number'
          name={name}
          value={formData === 0 ? "" : formData}
          placeholder={0}
          onChange={(e) => handleChange(e)}
          focusBorderColor={error ? "orange" : "cyan.500"}
          borderColor={error ? "orange" : "none"}
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
