import { all } from 'redux-saga/effects';
import LoginSaga from '../screens/login/Login.saga';


export default function* StatisticsSaga() {
  yield all([
    LoginSaga(),
  ]);
}
