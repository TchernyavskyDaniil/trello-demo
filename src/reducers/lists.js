import { GET_LIST_REQUEST } from "../actions/types";

const initialState = {
  lists: [],
  isFetching: false
};

function profilesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_REQUEST:
      return { ...state, lists: action.payload };

    default:
      return state;
  }
}

export default profilesReducer;
