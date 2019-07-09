import actions from '../../utils/actions.constants';
import { all, takeEvery, put, call, select } from 'redux-saga/effects';
import { urls, Get } from '../../utils/api';
import { changeEventsLoading, changeEvents, changeEventSelected } from './Events.actions';
import { getAuthorizationHeader } from '../../utils/functions';
import AlertWrapper from '../../components/Alert';


const mapEventsByDate = (events) => {
  events = events.sort((a, b) => a.startAt > b.startAt)
  return events;
}

export function* getEvents({ payload }) {
  try {
    const { eventsList } = yield select(({ events }) => ({ eventsList: events.eventsList }))
    yield put(changeEventsLoading(true))
    const authHeader = yield getAuthorizationHeader();
    let response = yield call(Get, `${urls.GET_EVENTS}?limit=10&page=${payload}`, authHeader);

    response.data = [...eventsList.data, ...mapEventsByDate([...response.data])]

    yield put(changeEvents(response));
  } catch (error) {
    yield AlertWrapper('Ops!', 'Erro ao consultar os eventos')
  } finally {
    yield put(changeEventsLoading(false))
  }
}

export default function* MySaga() {
  yield all([
    yield takeEvery(actions.ASYNC_GET_EVENTS, getEvents),
  ])
}