import { useContext, useState } from "react";
import TipContext from "../context/TipContext";
import { Box } from "@chakra-ui/react";
import dollar from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";
import FormInput from "./FormInput";
import SelectTip from "./SelectTip";

const Form = () => {
  const { dispatch, bill, tip, people } = useContext(TipContext);

  const [formData, setFormData] = useState({
    bill,
    tip,
    people,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    switch (e.target.name) {
      case "bill":
        dispatch({ type: "SET_BILL", payload: e.target.value });
        break;
      case "tip":
        dispatch({ type: "SET_TIP", payload: e.target.value });
        break;
      case "people":
        dispatch({ type: "SET_PEOPLE", payload: e.target.value });
        break;
      default:
        break;
    }

    dispatch({ type: "SET_AMOUNT" });
  };

  return (
    <Box
      as='form'
      width={{ base: "100%", md: "50%" }}
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
