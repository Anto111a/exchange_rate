//Core
import React from 'react';
import { useSelector } from 'react-redux';
//Selectors
import{ currentCoinSelector, valueSelector, selectedCurrencySelector, resultSelector} from '../../engine/core/currencyItem/selectors';
//Styles
import './Result.css';

export default function Result() {
  const test = 'test'
  const value = useSelector(valueSelector);
  const currentCoin = useSelector(currentCoinSelector).toUpperCase();
  const result = useSelector(resultSelector);
  const selectedCurrency = useSelector(selectedCurrencySelector).toUpperCase();

  if(useSelector(valueSelector) ==="") {
    return(
      <p className="result">Make sure that Your input is valid</p>
    )
  }
  return(
    <p className="result"> <b>{+value} {currentCoin}</b> will be <b>{result}</b> in <b>{selectedCurrency}</b> </p> 
  )
}
