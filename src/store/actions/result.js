
import * as actionTypes from "./actionTypes";

// Synchronous action
const saveResult = (res) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
};

// Asynchronous action dispatches the synchronous action once the asynchronous task is done
export const storeResult = (res) => {
  // return (dispatch, getState) => {
    return dispatch => {
    setTimeout(() => {
      // const oldCounter = getState().ctr.counter;
      // console.log(oldCounter);
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResult = (resElId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: resElId
  };
};