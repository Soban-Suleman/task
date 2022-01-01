import Swal from "sweetalert2";
import {
  LOAD_USERS_FAIL,
  LOAD_USERS_REQUEST,
  LOAD_USERS_SUCCESS,
} from "../constants";
import { getUsers } from "../../api/ApiCalls";

export const loadUsers = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USERS_REQUEST });

    const response = await getUsers();

    dispatch({
      type: LOAD_USERS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOAD_USERS_FAIL,
      // payload: error.response.data.message,
    });
  }
};
