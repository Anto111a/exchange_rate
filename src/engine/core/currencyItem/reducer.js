//Actions
import * as types from './types';

const initialState = {
  list: {},
  currentCoin: "btc",
  value: "",
  selectedCurrency: "uah",
  loading: true
};

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_RATE_DATA:{
      return {
        ...state, 
        list: action.payload
      };
    }

    case types.SET_CURRENT_ITEM:{
      return {
        ...state, 
        currentCoin: action.payload
      };
    }

    case types.SET_VALUE:{
      return {
        ...state, 
        value: action.payload
      };
    }
     
    case types.SET_SELECTED_CURRENCY:{
      return {
        ...state,
        selectedCurrency: action.payload
      }
    }

    case types.SHOW_LOADER:{
      return {
        ...state,
        loading: true
      }
    }

    case types.HIDE_LOADER:{
      return {
        ...state,
        loading: false
      }
    }
    default: {
      return state;
    }
  }
}
