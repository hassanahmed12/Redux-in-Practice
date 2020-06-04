const iState = {
  name: "hassan",
};
const reducer = (state = iState, action) => {
  console.log(action);
  if (action.type === "CHANGE_NAME") {
    return {
      name: action.payload,
    };
  }
  return state;
};
export default reducer;
