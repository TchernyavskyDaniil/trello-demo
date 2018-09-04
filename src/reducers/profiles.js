import { GET_PROFILES_REQUEST } from "../actions/profilesActions";

const initialState = {
  profiles: []
};

function profilesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILES_REQUEST:
      return { ...state, profiles: action.payload };

    default:
      return state;
  }
}

export default profilesReducer;
