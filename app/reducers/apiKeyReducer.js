import * as ActionTypes from '../actions/actionTypes';

var initialState = {key: null}

export default function(state=initialState, action){
  switch (action.type) {
    case ActionTypes.CHANGE_API_KEY:
      return Object.assign({}, state, {key: action.payload})
      break;
    default:
      return state;
  }
}
