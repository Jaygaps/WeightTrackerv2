export const ActionTypes = Object.freeze({
  FETCH_USER_DATA: "FETCH_USER_DATA",
});

export const fetchUsers = (userData) => async (dispatch, getState) => {
  dispatch({
    type: ActionTypes.FETCH_USER_DATA,
    userData,
  });
};
