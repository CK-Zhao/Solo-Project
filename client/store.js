import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

// Define a simple reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
//const store = createStore(reducer, composeWithDevTools());
const store = createStore(reducer);

export default store;
