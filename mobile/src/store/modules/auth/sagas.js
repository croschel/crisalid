import { all, call, put, takeLatest, delay } from 'redux-saga/effects';
import api from '~/services/api';
import { Alert } from 'react-native';
import { signInSuccess, signFailure, signUpSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'login', { email, password });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;


    yield put(signInSuccess(token, user));

  } catch (err) {
    Alert.alert('Falha na autenticação',
      'Houve um erro no login, por favor verifique seus dados')
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password, confirmPassword } = payload;

    yield call(api.post, 'register', {
      name,
      email,
      password,
      confirmPassword
    });
    Alert.alert('Cadastro concluído com Sucesso');
    yield put(signUpSuccess());
  } catch (error) {
    Alert.alert('Falha no cadastro',
      'Houve um erro no cadastro, por favor verifiquer seus dados!');
    yield put(signFailure());
  }
}


export function SetToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {

}

export default all([
  takeLatest('persist/REHYDRATE', SetToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
