import { createContext, useReducer } from "react";
import tipReducer from "./TipReducer";

const TipContext = createContext();

export const TipProvider = ({ children }) => {
  const initalState = {
    bill: 0,
    tip: 0,
    custom: 0,
    people: 0,
    tipAmount: 0,
    totalAmount: 0,
    error: null,
  };

  const [state, dispatch] = useReducer(tipReducer, initalState);

  return (
    <TipContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TipContext.Provider>
  );
};

export default TipContext;
