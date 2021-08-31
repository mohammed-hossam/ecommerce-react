import { takeEvery, call, put } from 'redux-saga/effects';
import { addDataTofetchedCollections, db } from '../../firebase/firebase.utils';
import { fetchCollectionFailure, fetchCollectionSuccess } from './shopActions';

export function* fetchCollectionsAsync() {
  try {
    const collectionsRef = db.collection('collections');
    //yield hena bt3ml zy await bta5od el resolved data mn el promise gahza w 7tnaha fe snapshot.
    const snapShot = yield collectionsRef.get();
    const collectionsObject = yield call(addDataTofetchedCollections, snapShot);
    //call bta5od el function ele htnfzha ka first parameter w arguments el functions ka second parameter

    // setcollections(collectionsObject) and setIsLoading(false)=
    yield put(fetchCollectionSuccess(collectionsObject));
  } catch (err) {
    yield put(fetchCollectionFailure(err.message));
  }
}

export function* fetchCollectionsStartSagaWatcher() {
  yield takeEvery('FETCH_COLLECTIONS_START', fetchCollectionsAsync);
}
