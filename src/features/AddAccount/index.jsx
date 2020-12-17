import React, { useState } from 'react';
import {
  Button, Card, Col, Form, Row,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addAccount } from '../../store/reducers/Account';
import './AddAccount.css';
import BankAccount from './BankAccount';

const ACCOUNT_TYPES = {
  chequing: 'Chequing',
  savings: 'Savings',
  creditCard: 'Credit Card',
  rrsp: 'RRSP',
  tfsa: 'TFSA',
};

export default function AddAccount() {
  const [accountName, setAccountName] = useState();
  const [accountType, setAccountType] = useState();
  const [bankName, setBankName] = useState();
  const [accountNumber, setAccountNumber] = useState();
  const [currentAmount, setCurrentAmount] = useState();

  const dispatch = useDispatch();
  const saveAccount = () => {
    dispatch(addAccount({
      accountName,
      accountType,
      bankName,
      accountNumber,
      currentAmount
    }));
  }
  const renderFormForAccountType = (accountType) => {
    switch (accountType) {
      case ACCOUNT_TYPES.chequing:
      case ACCOUNT_TYPES.savings:

        return <BankAccount
          bankName={bankName} setBankName={setBankName}
          accountNumber={accountNumber} setAccountNumber={setAccountNumber}
          currentAmount={currentAmount} setCurrentAmount={setCurrentAmount}
        />;
      default:
        return '';
    }
  }
  return (
    <Card>
      <Card.Body>
        <Card.Title>Add a new account</Card.Title>
        <Form align="left">
          <Form.Group as={Row} controlId="accountName">
            <Form.Label column sm={4}>Account Name</Form.Label>
            <Col sm={8}>
              <Form.Control type="text" placeholder="Enter account name" value={accountName} onChange={(e) => setAccountName(e.target.value)} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="accountType">
            <Form.Label column sm={4}>Account Type</Form.Label>
            <Col sm={8}>
              <Form.Control as="select" custom onChange={(e) => setAccountType(e.target.value)} value={accountType}>
                <option disabled>Select the type of account</option>
                <option>Chequing</option>
                <option>Savings</option>
                <option>Credit Card</option>
                <option>Pension</option>
                <option>TFSA</option>
              </Form.Control>
            </Col>
          </Form.Group>
          {renderFormForAccountType(accountType)}
          <Button variant="primary" onClick={() => saveAccount()}>Save</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

