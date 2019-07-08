import { put, call } from 'redux-saga/effects';
import { Post, urls } from '../../utils/api';
import { doLogin } from '../../screens/login/Login.saga';
import { changeLoginLoading, changeLoginMsgError, changeUserLogged, doLogin as doLoginAction } from '../../screens/login/Login.actions';

describe('Testing  login', () => {
  it('login successfully', () => {

    const payload = {
      email: 'student@ae.com',
      password: '123456'
    }

    const generator = doLogin({ payload });

    expect(generator.next().value)
      .toEqual(put(changeLoginLoading(true)));

    expect(generator.next().value)
      .toEqual(call(Post, urls.LOGIN, payload));

    expect(generator.next().value)
      .toEqual(put(changeUserLogged()));

    generator.next();

    expect(generator.next().value)
      .toEqual(put(changeLoginLoading(false)));
  });

  it('login no fields', () => {
    const payload = {
      email: '',
      password: ''
    }

    const generator = doLogin({ payload });

    const msg = 'Todos os dados são obrigátorios, preencha-os e tente novamente.';

    expect(generator.next(msg).value)
      .toEqual(put(changeLoginMsgError(msg)));

    expect(generator.next().value)
      .toEqual(put(changeLoginLoading(false)));
  });

});