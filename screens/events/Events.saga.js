import actions from '../../utils/actions.constants';
import { all, takeEvery, put, call, select } from 'redux-saga/effects';
import { urls, Get } from '../../utils/api';
import { changeEventsLoading, changeEvents } from './Events.actions';
import { getAuthorizationHeader } from '../../utils/functions';

function* getEvents({ payload }) {
  try {
    let { eventsList } = yield select(({ events }) => ({ eventsList: events.eventsList }))
    yield put(changeEventsLoading(true))
    const authHeader = yield getAuthorizationHeader();
    let response = yield call(Get, `${urls.GET_EVENTS}?limit=5&page=${payload}`, authHeader);
    response.data = [...eventsList.data, ...response.data,]
    yield put(changeEvents(response));
  } catch (error) {
    console.log(error.message);
  } finally {
    yield put(changeEventsLoading(false))
  }
}

export default function* MySaga() {
  yield all([
    yield takeEvery(actions.ASYNC_GET_EVENTS, getEvents),
  ])
}