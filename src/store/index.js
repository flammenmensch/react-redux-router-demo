import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../modules';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('app:state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem('app:state', JSON.stringify(state));
  } catch (err) {}
};

const savedState = loadState();

const store = createStore(rootReducer, savedState, applyMiddleware(thunk));

store.subscribe(() => saveState(store.getState()));

export default store;
