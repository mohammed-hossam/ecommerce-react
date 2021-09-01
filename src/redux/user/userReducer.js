const INITIAL_STATE = { currentUser: null, errorMsg: null };
function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GOOGLE_SIGN_IN_SUCCESS':
    case 'EMAIL_SIGN_IN_SUCCESS':
      return { ...state, currentUser: action.payLoad, errorMsg: null };
    case 'SIGN_OUT_SUCCESS':
      return { ...state, currentUser: null, errorMsg: null };
    case 'GOOGLE_SIGN_IN_FAILURE':
    case 'EMAIL_SIGN_IN_FAILURE':
    case 'SIGN_OUT_FAILURE':
      return { ...state, errorMsg: action.payLoad };

    default:
      return state;
  }
}

export default userReducer;
