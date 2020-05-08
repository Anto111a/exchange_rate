// Types
import * as types from './types';

export const setRateData = data => ({
  type: types.SET_RATE_DATA,
  payload: data
});

export const setCurrentItem = currentData => ({
  type: types.SET_CURRENT_ITEM,
  payload: currentData
});

export const setValue = value => ({
  type:types.SET_VALUE,
  payload: value
});

export const setSelectedCurrency = currency => ({
  type: types.SET_SELECTED_CURRENCY,
  payload: currency
});

export const showLoader= () => ({
  type: types.SHOW_LOADER
});

export const hideLoader = () => ({
  type: types.HIDE_LOADER
});