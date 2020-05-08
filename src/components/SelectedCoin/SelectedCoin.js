//core
import React from 'react';
import { useSelector } from 'react-redux';

//Selectors
import {currentCoinSelector} from '../../engine/core/currencyItem/selectors';

export default function SelectedCoinComponent() {
  const selectedCoin = useSelector(currentCoinSelector).toUpperCase();
  return (
    <p className = "selectedCoin">Selected coin: {selectedCoin}</p>
  )
}