import axios from "../axios";

export const GET_PROFILES_REQUEST = "GET_PROFILES_REQUEST";

export function getProfiles() {
  return dispatch => {
    axios.get("/profiles").then(response => {
      dispatch({
        type: GET_PROFILES_REQUEST,
        payload: response.data
      });
    });
  };
}
