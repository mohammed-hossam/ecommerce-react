import { call, all } from 'redux-saga/effects';
import { cartSagas } from './cart/cartSagas';
import { fetchCollectionsStartSagaWatcher } from './shop/shopSagas';
import { usersSaga } from './user/userSagas';

export function* rootSaga() {
  yield all([
    call(fetchCollectionsStartSagaWatcher),
    call(usersSaga),
    call(cartSagas),
  ]);
  //msh lazm 2st5dm call hena
}
