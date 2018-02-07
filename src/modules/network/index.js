const SET_OFFLINE = 'app/network/set_offline';

const initialState = {
  offline: false
};

export const setOffline = (value) => ({
  type: SET_OFFLINE,
  payload: value
});

export default (state=initialState, action) => {
  switch (action.type) {
    case SET_OFFLINE:
      return { ...state, offline: action.payload };
    default:
      return state;
  }
};
