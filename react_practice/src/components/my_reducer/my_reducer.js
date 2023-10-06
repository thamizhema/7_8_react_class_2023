export function myReducer(state, action) {
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case "ADD": {
      return { ...state, count: state.count + 1 };
    }
    case "valueChange": {
      return { ...state, text: action.data };
    }
    default: {
      return { Error: "Ivalid action" };
    }
  }
}
