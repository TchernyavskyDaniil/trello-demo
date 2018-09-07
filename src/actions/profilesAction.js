import { getProfilesApi } from "../api";
import { GET_PROFILES_REQUEST } from "./types";

function getProfiles() {
  return dispatch => {
    getProfilesApi.then(response => {
      dispatch({
        type: GET_PROFILES_REQUEST,
        payload: response.data
      });
    });
  };
}

export default getProfiles;
