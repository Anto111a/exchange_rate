// Modules
import { all, call, takeEvery, put } from 'redux-saga/effects';

//Actions
import {setRateData} from  '../actions'

export function* getCurrencyListWorker() {
  try {
    const response = yield fetch('https://api.kuna.io/v3/exchange-rates')
      .then(response => response.json());
    const result = response.filter(item => item.currency==='btc'||item.currency==='eth'||item.currency==='xrp');
    const action = setRateData(result);
    yield put(action); // <-- Dispatch
  } catch (err) {
    // TODO: Handle error
    console.error(err)
  }
}
