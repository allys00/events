import actions from '../../utils/actions.constants';
import { all, takeEvery, put, call } from 'redux-saga/effects';
import { changeLoginLoading, changeUserLogged, changeLoginMsgError } from './Login.actions';
import { Post, urls } from '../../utils/api';
import { AsyncStorage } from 'react-native';
import { navigate } from '../../utils/NavigationService';

function* doLogin({ payload }) {
  try {
    yield put(changeLoginLoading(true))
    const userLogged = yield call(Post, urls.LOGIN, payload)
    yield put(changeUserLogged(userLogged));
    console.log(userLogged);
    yield call(AsyncStorage.setItem, 'userToken', userLogged.token);
    navigate('App');
  } catch (error) {
    yield put(changeLoginMsgError('Verifique seu e-mail e senha, e tente novamente!'));
    console.log(error)
  } finally {
    yield put(changeLoginLoading(false))
  }
}

function* doLogout() {
  try {
    yield call(AsyncStorage.removeItem, 'userToken');
    navigate('Login');
  } catch (error) {
    console.log(error)
  }
}

export default function* MySaga() {
  yield all([
    yield takeEvery(actions.ASYNC_LOGIN, doLogin),
    yield takeEvery(actions.ASYNC_LOGOUT, doLogout),
  ])
}