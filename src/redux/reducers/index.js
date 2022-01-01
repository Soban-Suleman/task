import { combineReducers } from "redux";
import {
  LOAD_USERS_FAIL,
  LOAD_USERS_REQUEST,
  LOAD_USERS_SUCCESS,
} from "../constants";

export const userReducer = (state = { users: {} }, action) => {
  switch (action.type) {
    case LOAD_USERS_REQUEST:
      return {
        loading: true,
      };
    case LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case LOAD_USERS_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  users: userReducer,
});
