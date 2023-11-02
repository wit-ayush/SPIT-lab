// src/store.js

import { createStore } from 'redux';

// Define an initial state (optional)
const initialState = {
  accountData: null
};

// Define a reducer to handle actions
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACCOUNT_DATA':
      return {
        ...state,
        accountData: action.payload
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
