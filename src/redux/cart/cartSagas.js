import { all, put, call, takeLatest } from 'redux-saga/effects';
import { clearCart } from './cartActions';

export function* clearCartOnSignoutSagaWorker() {
  yield put(clearCart());
}

export function* onSignoutSuccessSagaWatcher() {
  yield takeLatest('SIGN_OUT_SUCCESS', clearCartOnSignoutSagaWorker);
}

export function* cartSagas() {
  yield all([call(onSignoutSuccessSagaWatcher)]);
}
