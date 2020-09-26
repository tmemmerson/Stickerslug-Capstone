import * as c from "./../actions/ActionTypes";

export default (state = {}, action) => {
  const { id, formattedWaitTime } = action;
  switch (action.type) {
    case c.DELETE_SURVEY:
      const newState = { ...state };
      delete newState[id];
      return newState;
    case c.UPDATE_TIME:
      const updatedSurvey = Object.assign({}, state[id], { formattedWaitTime });
      const updatedState = Object.assign({}, state, {
        [id]: updatedSurvey,
      });
      return updatedState;
    default:
      return state;
  }
};
