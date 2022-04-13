import { Box } from "@chakra-ui/react";
import Form from "./Form";
import Result from "./Result";

const Card = () => {
  return (
    <Box
      width={{ base: "100%", md: "768px" }}
      height='400px'
      bg='white'
      padding='20px'
      borderRadius='15px'
      boxShadow='-1px 0px 8px -6px rgba(0,0,0,0.5)'
      display='flex'
      flexDirection={{ base: "column", md: "row" }}
    >
      <Form />
      <Result />
    </Box>
  );
};

export default Card;
