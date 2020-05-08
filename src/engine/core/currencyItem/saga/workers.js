// Modules
import { put, delay  } from 'redux-saga/effects';

//Actions
import {setRateData, showLoader, hideLoader} from  '../actions'

const DEFAULT_CURRENCY = ['btc', 'eth', 'xrp'];
export function* getCurrencyListWorker() {
  while(true) {
     try {
      yield put(showLoader());
      const response = yield fetch('https://api.kuna.io/v3/exchange-rates')
        .then(response => response.json());

      const result = response.reduce((acc, item) => {
        const { currency } = item;
        if (DEFAULT_CURRENCY.includes(currency)) {
          acc[currency] = item;
        }
        return acc;
      }, {});

      const action = setRateData(result);
      yield put(action);
      yield put(hideLoader());
    } catch (err) {
      console.error(err);
    } finally {
      yield delay(600000); //10 minutes
    }
  }
}
