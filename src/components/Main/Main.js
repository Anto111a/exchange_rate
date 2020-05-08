//Core
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Actions
import { getRateDataAsync } from '../../engine/core/currencyItem/saga/asyncActions';

//comppponents
import CurrencyWidget from '../CurrencyWidget/CurrencyWidget';
import SelectedCoinComponent from '../SelectedCoin/SelectedCoin'
import Input from '../Input/Input';
import CurrencyControl from '../CurrencyControl/CurrencyControl';
import Result from '../Result/Result';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
//Selectors
import {currencyListSelector , loaderSelector} from '../../engine/core/currencyItem/selectors';
//Styles
import './Main.css';

export default function Main() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getRateDataAsync())
  }, [dispatch]);

  const data = useSelector(currencyListSelector);
  const loader = useSelector(loaderSelector);
  
  if(loader) {
    return (
      <Spinner animation="grow" variant="success" style={{width: '8rem', height: '8rem'}}/>
    );
  } 
  return(
    <Container>
      <Row>
        {Object.keys(data).map((item, index) =>
          <CurrencyWidget 
            key={index}
            currentItem = {data[item].currency}
            usd = {data[item].usd}
            uah = {data[item].uah}
            rub = {data[item].rub}
          />
        )}
      </Row>
      <Row>
        <Col xs="12" >
         <SelectedCoinComponent/>
        </Col>
      </Row>
      <Input/>
      <Row>
        <Col xs="12" >
          <CurrencyControl/>
        </Col>
      </Row>
      <Row>
        <Col xs="12" >
          <Result/>
        </Col>
      </Row>
  </Container>
  )
}
