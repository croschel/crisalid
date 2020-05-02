export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}
// This part will depend of backend @tupy
export function signInSuccess(token, client) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, client },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
