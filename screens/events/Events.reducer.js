import actions from "../../utils/actions.constants";

const INITIAL_STATE = {
  isLoading: false,
  eventsList: {
    data: [],
    metadata: {}
  },
  eventSelected: {}
}

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {

    case actions.CHANGE_EVENTS_LOADING:
      return { ...state, isLoading: payload }

    case actions.CHANGE_EVENTS:
      return { ...state, eventsList: payload }

    case actions.CHANGE_EVENT_SELECTED:
      return { ...state, eventSelected: payload }

    default:
      return state
  }
};