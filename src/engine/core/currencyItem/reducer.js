//Actions
import * as types from './types';

const initialState = {
  list: []
};
// console.log(initialState);

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_RATE_DATA:{
      return {
        ...state, 
        list: action.payload
      };
    }
     
    default: {
      return state;
    }
  }
}