/* eslint-disable no-unused-vars */
import {
LOGIN_REQUEST,
LOGIN_FAIL,
LOGIN_SUCCESS,
LOGOUT_SUCCESS
} from 'constants/User';
import {
ROUTING
} from 'constants/Routing';

export function login(payload) {
  return  (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST
    });
    setTimeout(() => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          name: payload.name,
          isAuthenyicated:true
        }
      });
      dispatch({
        type: ROUTING,
        paload: {
          method: 'push',
          nextUrl: '/admin'
        }
      });
    }, 2000);
  };
}

export function logout() {
  return {
    type: LOGOUT_SUCCESS
  };
}
/* eslint-enable no-unused-vars */
