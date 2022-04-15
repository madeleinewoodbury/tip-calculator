const calculateTipAmount = (state) => {
  const bill = Number(state.bill);
  const tip = Number(state.tip) / 100;
  const people = Number(state.people);

  if (bill > 0 && people > 0) {
    if (tip == 0) {
      return 0;
    } else {
      return (bill * tip) / people;
    }
  }

  return 0;
};

const calculateTotalAmount = (state) => {
  const bill = Number(state.bill);
  const tip = 1 + Number(state.tip) * (1 / 100);
  const people = Number(state.people);

  if (people > 0) {
    return (bill * tip) / people;
  }

  return 0;
};

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
    case "SET_CUSTOM":
      return {
        ...state,
        custom: action.payload,
      };
    case "SET_PEOPLE":
      return {
        ...state,
        people: action.payload,
        error: action.payload === "0" ? "Can't be zero" : null,
      };
    case "SET_AMOUNT":
      return {
        ...state,
        tipAmount: calculateTipAmount(state),
        totalAmount: calculateTotalAmount(state),
      };
    case "RESET":
      return {
        bill: 0,
        tip: 0,
        custom: 0,
        people: 0,
        tipAmount: 0,
        totalAmount: 0,
        error: null,
      };
    default:
      return state;
  }
};

export default tipReducer;
