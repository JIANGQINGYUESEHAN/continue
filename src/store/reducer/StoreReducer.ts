/* eslint-disable @typescript-eslint/no-explicit-any */

// import * as TYPES from '../action/action_type';
const InitState = {
    storeList: []
}
const StoreReducer = function (state = InitState, action: any) {
    //console.log(action);
    //浅克隆
    state = { ...state }
    switch (action.type) {

        default:
            break;
    }
    return state
}

export default StoreReducer