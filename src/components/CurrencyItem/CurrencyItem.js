//core
import React from 'react';

export default function CurrencyItem(props) {
  const { currentItem, usd, uah, rub } = props;
  const url = `./images/${currentItem.toUpperCase()}.png`
  console.log(currentItem);
  return (
    <ul>
      <li><img src={url} /></li>
      <li>1 {currentItem}</li>
      <li>it {usd} usd</li>
      <li>it {uah} uah</li>
      <li>it {rub} rub</li>
    </ul>
  );
}