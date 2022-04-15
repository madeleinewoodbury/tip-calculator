import { useContext } from "react";
import TipContext from "../context/TipContext";
import { Button, Input } from "@chakra-ui/react";

const TipButton = ({ value, handleChange }) => {
  const { dispatch, tip, custom } = useContext(TipContext);

  const handleTip = (e) => {
    dispatch({ type: "SET_CUSTOM", payload: 0 });
    handleChange(e);
  };

  const handleCustomAmount = (e) => {
    dispatch({ type: "SET_CUSTOM", payload: e.target.value });
    handleChange(e);
  };

  return value === "" ? (
    <Input
      type='number'
      name='tip'
      value={custom === 0 ? value : custom}
      onChange={handleCustomAmount}
      placeholder='Custom'
      focusBorderColor='cyan.500'
      textAlign='right'
      fontSize={custom === 0 ? "15px" : "24px"}
      color='cyan.600'
      bg='cyan.100'
    />
  ) : (
    <Button
      bg={Number(tip) === value ? "cyan.500" : "cyan.600"}
      color={Number(tip) === value ? "cyan.600" : "white"}
      _hover={{ bg: "rgba(38, 192, 171, .5)", color: "cyan.600" }}
      _focus={{ bg: "cyan.500", color: "cyan.600", outline: "none" }}
      onClick={handleTip}
      value={value}
      name='tip'
    >
      {value}%
    </Button>
  );
};

export default TipButton;
