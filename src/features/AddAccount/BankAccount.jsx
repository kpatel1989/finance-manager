import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

function BankAccount(props) {
  return (
    <>
      <Form.Group as={Row} controlId="bankName">
        <Form.Label column sm={4}>Bank Name</Form.Label>
        <Col sm={8}>
          <Form.Control type="text" placeholder="Enter bank name" value={props.bankName} onChange={(e) => props.setBankName(e.target.value)} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="accountNumber">
        <Form.Label column sm={4}>Account number</Form.Label>
        <Col sm={8}>
          <Form.Control type="text" placeholder="Enter the last 5 digits of this account" value={props.accountNumber} onChange={(e) => props.setAccountNumber(e.target.value)} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="balance">
        <Form.Label column sm={4}>Current amount</Form.Label>
        <Col sm={8}>
          <Form.Control type="text" placeholder="Enter the current balance of this account" value={props.currentAmount} onChange={(e) => props.setCurrentAmount(e.target.value)} />
        </Col>
      </Form.Group>
    </>
  );
}

export default BankAccount;
