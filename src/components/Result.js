import { useContext } from "react";
import { Box, Button } from "@chakra-ui/react";
import TipContext from "../context/TipContext";
import Amount from "./Amount";

const Result = () => {
  const { dispatch, tipAmount, totalAmount, reset } = useContext(TipContext);

  const handleClick = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <Box
      width={{ base: "100%", md: "50%" }}
      bg='cyan.600'
      borderRadius='15px'
      padding='30px'
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
    >
      <Box>
        <Amount
          text='Tip Amount'
          amount={tipAmount === 0 ? "0.00" : tipAmount.toFixed(2)}
        />
        <Amount
          text='Total'
          amount={totalAmount === 0 ? "0.00" : totalAmount.toFixed(2)}
        />
      </Box>
      <Box bg={reset ? "white" : "transparent"} borderRadius='0.375rem'>
        <Button
          bg={reset ? "cyan.500" : "rgba(38, 192, 171, .5)"}
          color='cyan.600'
          width='100%'
          onClick={handleClick}
          _hover={{ bg: "rgba(38, 192, 171, .5)", color: "cyan.600" }}
          disabled={!reset}
        >
          RESET
        </Button>
      </Box>
    </Box>
  );
};

export default Result;
