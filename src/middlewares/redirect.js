import {
ROUTING
} from 'constants/Routing';
import browserHistory from 'history/history';
// import { push } from 'react-router-redux';
// import { createHistory } from 'history';
/*eslint-disable */

export const redirect = store => next => action => {
  if (action.type === ROUTING) {
    browserHistory.replace('/admin');
  }
  return next(action);
};
/*eslint-enable */
