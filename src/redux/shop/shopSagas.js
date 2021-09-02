import { call, put, takeLatest } from 'redux-saga/effects';
import { addDataTofetchedCollections, db } from '../../firebase/firebase.utils';
import { fetchCollectionFailure, fetchCollectionSuccess } from './shopActions';

export function* fetchCollectionsAsync() {
  try {
    const collectionsRef = db.collection('collections');
    //yield hena bt3ml zy await bta5od el resolved data mn el promise gahza w 7tnaha fe const snapshot. feh so2al mohm hena leh mnst5dmsh call m3 collectionsRef.get() ?? 23tqd el egaba mn 3nde t5men fl gomla deh mn docs method get:Note: By default, get() attempts to provide up-to-date data when possible by waiting for data from the server, but it may return cached data or fail if you are offline and the server cannot be reached. This behavior can be altered via the GetOptions parameter.
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
  yield takeLatest('FETCH_COLLECTIONS_START', fetchCollectionsAsync);
}
