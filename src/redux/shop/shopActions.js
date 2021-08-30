import { addDataTofetchedCollections, db } from '../../firebase/firebase.utils';

function fetchCollectionStart() {
  return { type: 'FETCH_COLLECTIONS_START' };
}
function fetchCollectionSuccess(collections) {
  return { type: 'FETCH_COLLECTIONS_SUCCESS', payLoad: collections };
}
function fetchCollectionFailure(err) {
  return { type: 'FETCH_COLLECTIONS_FAILURE', payLoad: err };
}
export function fetchCollectionStartAsync() {
  return function thunkFunction(dispatch) {
    const collectionsRef = db.collection('collections');
    // dispatch(fetchCollectionStart());
    collectionsRef
      .get()
      .then((snapShot) => {
        const collectionsObject = addDataTofetchedCollections(snapShot);
        return collectionsObject;
      })
      .then((collectionsObject) => {
        // setcollections(collectionsObject) and setIsLoading(false)=
        dispatch(fetchCollectionSuccess(collectionsObject));
      })
      .catch((err) => dispatch(fetchCollectionFailure(err.message)));
  };
}
