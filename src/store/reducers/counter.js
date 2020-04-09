import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      // Attention! It does only a shallow copy! Work in this case.
      // We have to check for nested objects in some cases
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case actionTypes.DECREMENT:
      return {
        // Attention! It does only a shallow copy! Work in this case.
        // We have to check for nested objects in some cases
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.ADD:
      // Using function to make the reducer leaner
      return updateObject(state, {counter: state.counter + action.val});
      // return {
      //   ...state,
      //   counter: state.counter + action.val
      // };
    case actionTypes.SUBTRACT:
      return updateObject(state, {counter: state.counter - action.val});
    default:
      return state;
  }
};

export default reducer;
