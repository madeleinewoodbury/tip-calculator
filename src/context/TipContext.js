import { createContext, useReducer } from "react";
import tipReducer from "./TipReducer";

const TipContext = createContext();

export const TipProvider = ({ children }) => {
  const initalState = {
    bill: "",
    tip: "",
    people: "",
    tipAmount: 0,
    totalAmount: 0,
  };

  const [state, dispatch] = useReducer(tipReducer, initalState);

  return (
    <TipContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TipContext.Provider>
  );
};

export default TipContext;
