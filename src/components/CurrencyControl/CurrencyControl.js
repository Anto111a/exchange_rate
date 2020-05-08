//Core
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
//Components
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
//Actions
import { setSelectedCurrency } from '../../engine/core/currencyItem/actions';
//styles
import './CurrencyControl.css';

export default function CurrencyControl() {
  const dispatch = useDispatch();
  const controllsItems = ['uah', 'usd', 'rub'];
  const buttonsHandler = useCallback((e) => {
    dispatch(setSelectedCurrency(e));
  },[dispatch]);

  return (
    <ToggleButtonGroup 
      type="radio" 
      name="options" 
      defaultValue={controllsItems[0]} 
      onChange={buttonsHandler}>
        {controllsItems.map((item, index) =>
          <ToggleButton
          key={index}
          value={item}>
            {item.toUpperCase()}
          </ToggleButton>
        )}
    </ToggleButtonGroup>
  )
}