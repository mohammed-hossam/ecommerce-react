import {
  emailSignInFailure,
  emailSignInSuccess,
  googleSignInFailure,
  googleSignInSuccess,
  signoutFailure,
  signoutSuccess,
} from './userActions';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  googleProvider,
  auth,
  createUserinDataBase,
} from '../../firebase/firebase.utils';

//workers
function* googleSignInSagaWorker() {
  try {
    const user = yield auth.signInWithPopup(googleProvider);
    console.log(user);
    //const docRef = await createUserinDataBase(userAuth);
    //userAuth just the same as user.user
    const userRef = yield call(createUserinDataBase, user.user);
    //the snapshoot patern is
    //docRef.onSnapshot((snapShot) => {
    //setCurrentUser({ id: snapShot.id, ...snapShot.data() });
    //});
    //instead of snapshot pattern we will use the promise patternthat is downhere
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

//hena el watcher hata5od ka input el action ele mostm3a leh
function* emailSignInSagaWorker(action) {
  try {
    const email = action.payLoad.email;
    const password = action.payLoad.password;

    const user = yield auth.signInWithEmailAndPassword(email, password);
    console.log(user);
    //const docRef = await createUserinDataBase(userAuth);
    //userAuth just the same as user.user
    const userRef = yield call(createUserinDataBase, user.user);
    //the snapshoot patern is
    //docRef.onSnapshot((snapShot) => {
    //setCurrentUser({ id: snapShot.id, ...snapShot.data() });
    //});
    //instead of snapshot pattern we will use the promise patternthat is downhere
    const userSnapshot = yield userRef.get();
    yield put(
      emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(emailSignInFailure(error));
  }
}

function* checkUserSessionSagaWorker() {
  try {
    const userAuth = yield new Promise((resolve, reject) => {
      const unsubscribeFromAuth = auth.onAuthStateChanged((userAuth) => {
        unsubscribeFromAuth();
        resolve(userAuth);
      }, reject);
    });

    if (!userAuth) return;
    else {
      const userRef = yield call(createUserinDataBase, userAuth);
      const userSnapshot = yield userRef.get();
      yield put(
        //or googleSignInSuccess any thing
        emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
      );
    }
  } catch (error) {
    yield put(emailSignInFailure(error));
  }
}

function* signoutSagaWorker() {
  try {
    yield auth.signOut();
    yield put(signoutSuccess());
  } catch (error) {
    put(signoutFailure());
  }
}

// watchers
export function* googleSignInStartSagaWatcer() {
  yield takeLatest('GOOGLE_SIGN_IN_START', googleSignInSagaWorker);
}
export function* emailSignInStartSagaWatcer() {
  yield takeLatest('EMAIL_SIGN_IN_START', emailSignInSagaWorker);
}
export function* checkUserSessionSagaWatcher() {
  yield takeLatest('CHECK_USER_SESSION', checkUserSessionSagaWorker);
}
export function* signoutSagaWatcher() {
  yield takeLatest('SIGN_OUT_START', signoutSagaWorker);
}

export function* usersSaga() {
  yield all([
    call(googleSignInStartSagaWatcer),
    call(emailSignInStartSagaWatcer),
    call(checkUserSessionSagaWatcher),
    call(signoutSagaWatcher),
  ]);
}
// SIGN_OUT_START: 'SIGN_OUT_START',
// SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
// SIGN_OUT_FAILURE: 'SIGN_OUT_FAILURE'
