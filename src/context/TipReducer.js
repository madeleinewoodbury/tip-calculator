const tipReducer = (state, action) => {
  switch (action.type) {
    case "SET_BILL":
      return {
        ...state,
        bill: action.payload,
      };
    case "SET_TIP":
      return {
        ...state,
        tip: action.payload,
      };
    case "SET_PEOPLE":
      return {
        ...state,
        people: action.payload,
      };
    default:
      return state;
  }
};

export default tipReducer;
