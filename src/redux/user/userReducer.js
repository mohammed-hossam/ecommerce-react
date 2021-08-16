const INITIAL_STATE = { currentUser: null };
function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { ...state, currentUser: action.payLoad };

    default:
      return state;
  }
}

export default userReducer;
