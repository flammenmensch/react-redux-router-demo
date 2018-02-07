import {combineReducers} from 'redux';

import currency from './currency';
import network from './network';

export default combineReducers({
  currency,
  network
});
