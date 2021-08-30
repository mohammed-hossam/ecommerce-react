const INITIAL_STATE = { collections: null, isLoading: true, errorMsg: '' };

function shopReducer(state = INITIAL_STATE, action) {
  console.log('shopReducer');
  switch (action.type) {
    case 'FETCH_COLLECTIONS_SUCCESS':
      return { ...state, isLoading: false, collections: action.payLoad };
    case 'FETCH_COLLECTIONS_FAILURE':
      return { ...state, isLoading: false, errorMsg: action.payLoad };

    default:
      return state;
  }
}

export default shopReducer;
