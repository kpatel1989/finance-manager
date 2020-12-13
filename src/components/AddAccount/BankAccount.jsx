import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

function BankAccount() {
  const [bankName, setBankName] = useState();
  const [currentAmount, setCurrentAmount] = useState();
  const [accountNumber, setAccountNumber] = useState();
  return (
    <>
      <Form.Group as={Row} controlId="bankName">
        <Form.Label column sm={4}>Bank Name</Form.Label>
        <Col sm={8}>
          <Form.Control type="text" placeholder="Enter bank name" value={bankName} onChange={(e) => setBankName(e.target.value)} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="accountNumber">
        <Form.Label column sm={4}>Account number</Form.Label>
        <Col sm={8}>
          <Form.Control type="text" placeholder="Enter the last 5 digits of this account" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="balance">
        <Form.Label column sm={4}>Current amount</Form.Label>
        <Col sm={8}>
          <Form.Control type="text" placeholder="Enter the current balance of this account" value={currentAmount} onChange={(e) => setCurrentAmount(e.target.value)} />
        </Col>
      </Form.Group>
    </>
  );
}

export default BankAccount;
