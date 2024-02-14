/* eslint-disable @typescript-eslint/no-explicit-any */

import * as TYPES from "../action/action_type";
const InitState = {
  info: null,
};
const BaseReducer = function (state = InitState, action: any) {
  //浅克隆
  state = { ...state };
  switch (action.type) {
    case TYPES.BASE_INFO:
      state.info = action.info;
      break;

    default:
  }

  return state;
};

export default BaseReducer;
