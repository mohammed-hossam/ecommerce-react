const INITIAL_STATE = { collections: null, isLoading: false, errorMsg: '' };

function shopReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_COLLECTIONS_START':
      return { ...state, isLoading: true };
    case 'FETCH_COLLECTIONS_SUCCESS':
      return { ...state, isLoading: false, collections: action.payLoad };
    case 'FETCH_COLLECTIONS_FAILURE':
      return { ...state, isLoading: false, errorMsg: action.payLoad };

    default:
      return state;
  }
}

export default shopReducer;
