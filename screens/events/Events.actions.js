import actions from "../../utils/actions.constants";

export const changeEventsLoading = value => ({
  type: actions.CHANGE_EVENTS_LOADING,
  payload: value
});

export const getEvents = page => ({
  type: actions.ASYNC_GET_EVENTS,
  payload: page
});

export const changeEvents = events => ({
  type: actions.CHANGE_EVENTS,
  payload: events
});

export const changeEventSelected = event => ({
  type: actions.CHANGE_EVENT_SELECTED,
  payload: event
});
