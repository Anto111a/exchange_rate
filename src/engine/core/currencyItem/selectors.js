//Core
import { createSelector } from 'reselect';

export const currencyListSelector = state => state.currency.list;
export const currentCoinSelector = state => state.currency.currentCoin;
export const selectedCurrencySelector = state => state.currency.selectedCurrency;
export const valueSelector = state => state.currency.value;
export const loaderSelector = state => state.currency.loading;

export const resultSelector = createSelector(
  currencyListSelector,
  currentCoinSelector,
  valueSelector,
  selectedCurrencySelector,
  (list, currentCoin, value, currentCurrency) => (
    list[currentCoin]?list[currentCoin][currentCurrency]*value:{}
  )
);