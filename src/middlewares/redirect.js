import {
ROUTING
} from 'constants/Routing';
import { push } from 'react-router-redux';
import { browserHistory } from 'react-router';
// import { createHistory } from 'history';
/*eslint-disable */
console.log(browserHistory);
export const redirect = store => next => action => {
  if (action.type === ROUTING) {
  push('/admin' + Math.random());
  console.log(history)
}
  return next(action);
};
/*eslint-enable */
