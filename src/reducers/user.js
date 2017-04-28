import {
LOGIN_REQUEST,
LOGIN_FAIL,
LOGIN_SUCCESS,
LOGOUT_SUCCESS
} from 'constants/User';

const initialState = JSON.parse(window.localStorage.getItem('rr_user')) || {};

export default function userstate(state = initialState, action) {
  console.log(arguments);
  switch (action.type) {
    case LOGIN_REQUEST:
      return {};
    case LOGIN_SUCCESS:

      return {
        ...state, name: action.payload.name, isAuthenyicated: action.payload.isAuthenyicated
      };

    case LOGIN_FAIL:

      return {};
    case LOGOUT_SUCCESS:

      return {};
    default:
      return state;
  }
}
