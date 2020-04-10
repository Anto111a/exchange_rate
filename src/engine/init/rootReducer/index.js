// Core
import { combineReducers } from 'redux';

// Reducer
import { currencyReducer } from '../../core/currencyItem/reducer';

export const rootReducer = combineReducers({
  currency: currencyReducer
});