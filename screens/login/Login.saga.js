import actions from '../../utils/actions.constants';
import { all, takeEvery, put, call } from 'redux-saga/effects';
import { changeLoginLoading, changeUserLogged, changeLoginMsgError } from './Login.actions';
import { Post, urls } from '../../utils/api';
import { AsyncStorage } from 'react-native';
import { navigate } from '../../utils/NavigationService';

function* doLogin({ payload }) {
  try {
    if (!payload.email || !payload.password) {
      yield put(changeLoginMsgError('Todos os dados são obrigátorios, preencha-os e tente novamente.'));
      return;
    }

    yield put(changeLoginLoading(true))
    const userLogged = yield call(Post, urls.LOGIN, payload)
    yield put(changeUserLogged(userLogged));
    yield call(AsyncStorage.setItem, 'userToken', userLogged.token);
    navigate('App');

  } catch (error) {
    switch (error.message) {
      case 'Request failed with status code 401':
        yield put(changeLoginMsgError('Usuário e/ou senha incorretos, tente novamente!'));
        break;

      default:
        yield put(changeLoginMsgError('Algo de errado aconteceu, tente novamente, se o error persisti contate a administração'));
        break;
    }
  } finally {
    yield put(changeLoginLoading(false))
  }
}

function* doLogout() {
  try {
    yield call(AsyncStorage.removeItem, 'userToken');
    navigate('Login');
  } catch (error) {
    yield AlertWrapper('Ops!', 'Erro ao Sair, tente novamente')
  }
}

export default function* MySaga() {
  yield all([
    yield takeEvery(actions.ASYNC_LOGIN, doLogin),
    yield takeEvery(actions.ASYNC_LOGOUT, doLogout),
  ])
}