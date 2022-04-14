import { useState } from "react";
import { Button, Input, Box } from "@chakra-ui/react";

const TipButton = ({ tip, custom }) => {
  const [customAmount, setCustomAmount] = useState(0);
  const [input, setInput] = useState(false);

  return custom ? (
    <Box>
      {input ? (
        <Input
          type='number'
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          focusBorderColor='cyan.500'
          textAlign='right'
          fontSize='24px'
          color='cyan.600'
          bg='cyan.100'
          autoFocus
        />
      ) : (
        <Button
          bg='cyan.100'
          color='cyan.300'
          _hover={{ bg: "rgba(38, 192, 171, .5)", color: "cyan.600" }}
          _focus={{ bg: "cyan.500", color: "cyan.600", outline: "none" }}
          onClick={(e) => setInput(true)}
          width='100%'
        >
          Custom
        </Button>
      )}
    </Box>
  ) : (
    <Button
      bg='cyan.600'
      color='white'
      _hover={{ bg: "rgba(38, 192, 171, .5)", color: "cyan.600" }}
      _focus={{ bg: "cyan.500", color: "cyan.600", outline: "none" }}
      onClick={(e) => setInput(false)}
    >
      {tip}
    </Button>
  );
};

export default TipButton;
