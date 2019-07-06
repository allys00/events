import actions from "../../utils/actions.constants";

const INITIAL_STATE = {
  isLoading: false,
  eventsList: {
    data: [],
    metadata: {}
  },
}

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {

    case actions.CHANGE_EVENTS_LOADING:
      return { ...state, isLoading: payload }

    case actions.CHANGE_EVENTS:
      return { ...state, eventsList: payload }

    default:
      return state
  }
};