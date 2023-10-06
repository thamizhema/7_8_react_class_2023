export function dataReducer(state, action) {
  console.log(state);
  console.log(action);
  if (action.type === "GET_TODOS") {
    return { ...state, todos: action.data };
  } else {
    return { error: "invalid action" };
  }
}
