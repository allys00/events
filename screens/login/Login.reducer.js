import actions from "../../utils/actions.constants";

const INITIAL_STATE = {
  form: {
    email: '',
    password: '',
  },
  userLogged: {
    token: {}
  },
  msgError: null,
  isLoading: false
}

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {

    case actions.CHANGE_LOGIN_FORM:
      return { ...state, form: { ...state.form, [payload.key]: payload.value } }

    case actions.CHANGE_LOGIN_LOADING:
      return { ...state, isLoading: payload }

    case actions.CHANGE_USER_LOGGED:
      return { ...state, userLogged: payload }

    case actions.CHANGE_LOGIN_MSG_ERROR:
      return { ...state, msgError: payload }

    case actions.CLEAR_LOGIN_FORM:
      return { ...state, form: INITIAL_STATE.form }

    default:
      return state
  }
};