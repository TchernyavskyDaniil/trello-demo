import { getOptionsApi } from "../api";
import { GET_LIST_REQUEST } from "./types";

function getLists(id) {
  return dispatch => {
    getOptionsApi(id).then(response => {
      dispatch({
        type: GET_LIST_REQUEST,
        payload: response.data.lists
      });
    });
  };
}

export default getLists;
