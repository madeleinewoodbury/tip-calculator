import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Form from "./Form";
import Result from "./Result";

const Card = () => {
  const [formData, setFormData] = useState({
    bill: "",
    tip: 0,
    people: "",
    tipAmount: "",
    totalAmount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box
      width={{ base: "100%", md: "768px" }}
      height='400px'
      marginBottom='100px'
      bg='white'
      padding='20px'
      borderRadius='15px'
      boxShadow='-1px 0px 8px -6px rgba(0,0,0,0.5)'
      display='flex'
      flexDirection={{ base: "column", md: "row" }}
    >
      <Form formData={formData} handleChange={handleChange} />
      <Result />
    </Box>
  );
};

export default Card;
