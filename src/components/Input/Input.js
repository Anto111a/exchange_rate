//Core
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Components
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Actions
import {setValue} from '../../engine/core/currencyItem/actions';
//Styles 
import './Input.css';

export default function Input() {
  const dispatch = useDispatch();
  const numbValue = useSelector(state => state.currency.value);
  const inputHaldler= useCallback((e) => {
    const currentValue = e.target.value.replace(',','.');
    if (isFinite(currentValue)) {
      e.target.className = "valid";
      e.target.placeholder = "Plese input value!"
      dispatch(setValue(currentValue));
    } else {
      e.target.className = "inValid";
      e.target.placeholder = "Invalid value!"
    }
  },[dispatch]);

 //console.log('ARRRR!');
  return (
      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="3">
          <h4>Volume: </h4>
        </Form.Label>
        <Col xs={"8"} sm="6">
          <Form.Control 
            type="text"
            onChange = {inputHaldler}  
            value={numbValue}  
            className = "valid"
            placeholder = "Plese input value!"
          />
        </Col>
      </Form.Group>
  )
}