import axios from "../axios";

export const GET_LIST_REQUEST = "GET_LIST_REQUEST";

export function getLists(id) {
  return dispatch => {
    axios.get(`/options/${id}`).then(response => {
      dispatch({
        type: GET_LIST_REQUEST,
        payload: response.data.lists
      });
    });
  };
}
