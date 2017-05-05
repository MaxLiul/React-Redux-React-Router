import {
ROUTING
} from 'constants/Routing';
import browserHistory from 'history/history';

/*eslint-disable */

export const redirect = store => next => action => {
  if (action.type === ROUTING) {
    browserHistory.replace(action.payload.nextUrl);
    console.log('action.type');
  } else {
    console.log(`ActionType ${action.payload}`);
  }
  return next(action);
};
/*eslint-enable */
