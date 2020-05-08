//core
import React, {useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Actions
import {setCurrentItem} from '../../engine/core/currencyItem/actions';
//Components
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import FigureCaption from 'react-bootstrap/FigureCaption';
import ListGroup from 'react-bootstrap/ListGroup';
//Selectors
import { currentCoinSelector } from '../../engine/core/currencyItem/selectors';
//Images
import BTC from "../../assets/images/BTC.png";
import ETH from "../../assets/images/ETH.png";
import XRP from "../../assets/images/XRP.png";
//Styles
import './CurrentWidget.css';

export default function CurrencyItem( { currentItem, usd, uah, rub }) {
  const currentData = useSelector(currentCoinSelector);
  const dispatch = useDispatch();
  let currentImg;
  switch (currentItem) {
    case "btc":
      currentImg=BTC
      break;
    case "eth":
       currentImg=ETH
      break;
    case "xrp":
      currentImg=XRP
      break;
    default:
      break;
  };
  const currentItemHandler = useCallback(() => {
    if(currentData!==currentItem) {
      dispatch(setCurrentItem(currentItem));
    }
  },[dispatch, currentData, currentItem]);

  return (
    <Col 
    md="8"
    lg="6"
    xl="4" 
    className="widget "
    onClick = {currentItemHandler}
    >
      <Figure  
      className = "float-left">
        <FigureImage
          src={currentImg}
        />
        <FigureCaption>
        {currentItem.toUpperCase()}
        </FigureCaption>
      </Figure>
      <ListGroup>
        <ListGroup.Item><span>USD:</span>{usd}</ListGroup.Item>
        <ListGroup.Item><span>UAH:</span>{uah}</ListGroup.Item>
        <ListGroup.Item><span>RUB:</span>{rub}</ListGroup.Item>
      </ListGroup>
    </Col>
  );
}
