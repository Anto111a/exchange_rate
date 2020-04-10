//Core 
import {all, call} from 'redux-saga/effects';

//Watcers
import {cyrrencyRateWatcher} from '../../core/currencyItem/saga/watchers'

export function* rootSaga() {
  yield all ([
    call(cyrrencyRateWatcher)
  ]);
}
