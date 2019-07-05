import actions from "../../utils/actions.constants";

export const changeLoginForm = (key, value) => ({
  type: actions.CHANGE_LOGIN_FORM,
  payload: { key, value }
})
export const changeLoginMsgError = error => ({
  type: actions.CHANGE_LOGIN_MSG_ERROR,
  payload: error
})

export const doLogin = form => ({
  type: actions.ASYNC_LOGIN,
  payload: form
})

export const logout = () => ({
  type: actions.ASYNC_LOGOUT,
})

export const changeLoginLoading = value => ({
  type: actions.CHANGE_LOGIN_LOADING,
  payload: value
})

export const changeUserLogged = newUser => ({
  type: actions.CHANGE_USER_LOGGED,
  payload: newUser
})