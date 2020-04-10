//Core
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Actions
import { getRateDataAsync } from '../../engine/core/currencyItem/saga/asyncActions';

//comppponents
import CurrencyItem from '../CurrencyItem/CurrencyItem';

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRateDataAsync())
  }, [dispatch]);

  const data = useSelector(state => state.currency.list);

  if(data.length===0) {
    return (
      <p>Please Wait...</p>
    );
  } 
  return(data.map((item, index) =>
  <div key={index}>
      <CurrencyItem 
        currentItem = {item.currency}
        usd = {item.usd}
        uah = {item.uah}
        rub = {item.rub}
      />
  </div>))
}
