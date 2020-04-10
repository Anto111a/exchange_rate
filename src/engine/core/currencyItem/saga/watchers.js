// Modules
import { all, call, takeEvery, put } from 'redux-saga/effects';

// Types
import {GET_RATE_DATA_ASYNC} from './asyncTypes';

//Workers
import {getCurrencyListWorker} from './workers';

function* watchGetCurrencyList() {
  yield takeEvery(GET_RATE_DATA_ASYNC, getCurrencyListWorker)
}

export function* cyrrencyRateWatcher() {
  yield all([
    call(watchGetCurrencyList)
  ]);
}
