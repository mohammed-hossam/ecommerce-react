//google signin actions
export function googleSignInStart() {
  return { type: 'GOOGLE_SIGN_IN_START' };
}
export function googleSignInSuccess(user) {
  return { type: 'GOOGLE_SIGN_IN_SUCCESS', payLoad: user };
}
export function googleSignInFailure(err) {
  return { type: 'GOOGLE_SIGN_IN_FAILURE', payLoad: err };
}

//email signin actions
export function emailSignInStart(emailAndPassword) {
  return { type: 'EMAIL_SIGN_IN_START', payLoad: emailAndPassword };
}
export function emailSignInSuccess(emailAndPassword) {
  return { type: 'EMAIL_SIGN_IN_SUCCESS', payLoad: emailAndPassword };
}
export function emailSignInFailure(err) {
  return { type: 'EMAIL_SIGN_IN_FAILURE', payLoad: err };
}
//signout actions
export function signoutStart() {
  return { type: 'SIGN_OUT_START' };
}
export function signoutSuccess() {
  return { type: 'SIGN_OUT_SUCCESS' };
}
export function signoutFailure(err) {
  return { type: 'SIGN_OUT_FAILURE', payLoad: err };
}

//watch user sign in or out?
export function checkUserSession() {
  return { type: 'CHECK_USER_SESSION' };
}

// SIGN_OUT_START: 'SIGN_OUT_START',
// SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
// SIGN_OUT_FAILURE: 'SIGN_OUT_FAILURE'
