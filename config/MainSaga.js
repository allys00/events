import { all } from 'redux-saga/effects';
import LoginSaga from '../screens/login/Login.saga';
import EventsSaga from '../screens/events/Events.saga';


export default function* StatisticsSaga() {
  yield all([
    LoginSaga(),
    EventsSaga(),
  ]);
}
