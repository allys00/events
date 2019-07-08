import { put, call } from 'redux-saga/effects';
import { Post, urls, Get } from '../../utils/api';
import { getEvents } from '../../screens/events/Events.saga';

import {
  changeEventsLoading,
} from '../../screens/events/Events.actions';

let token;

beforeAll((done) => {
  const payload = {
    email: 'student@ae.com',
    password: '123456'
  }

  Post(urls.LOGIN, payload)
    .then((res) => {
      token = res.token
      done();
    })
})


describe('Testing events list', () => {

  it('get events for list be successfully', () => {
    const pagination = 1
    const generator = getEvents({ payload: pagination });

    generator.next();

    expect(generator.next(true).value)
      .toEqual(put(changeEventsLoading(true)));

    generator.next()

    expect(generator.next({ token }).value)
      .toEqual(call(Get, `${urls.GET_EVENTS}?limit=5&page=${pagination}`, { token }));

    generator.next()

    expect(generator.next(false).value)
      .toEqual(put(changeEventsLoading(false)));
  });

});