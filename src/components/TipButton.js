import { useState } from "react";
import { Button, Input, Box } from "@chakra-ui/react";

const TipButton = ({ tip, handleChange, custom }) => {
  const [customAmount, setCustomAmount] = useState("");

  const handleTip = (e) => {
    handleChange(e);
  };

  const handleCustomAmount = (e) => {
    setCustomAmount(e.target.value);
    handleChange(e);
  };

  return custom ? (
    <Input
      type='number'
      name='tip'
      value={customAmount}
      onChange={handleCustomAmount}
      placeholder='Custom'
      focusBorderColor='cyan.500'
      textAlign='right'
      fontSize={customAmount ? "24px" : "15px"}
      color='cyan.600'
      bg='cyan.100'
      autoFocus
    />
  ) : (
    <Button
      bg='cyan.600'
      color='white'
      _hover={{ bg: "rgba(38, 192, 171, .5)", color: "cyan.600" }}
      _focus={{ bg: "cyan.500", color: "cyan.600", outline: "none" }}
      onClick={handleTip}
      value={tip}
      name='tip'
    >
      {tip}%
    </Button>
  );
};

export default TipButton;
