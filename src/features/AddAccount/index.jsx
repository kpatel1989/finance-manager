import React, { useState } from 'react';
import {
  Button, Card, Col, Form, Row,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { saveAccount } from '../../store/reducers/Account';
import './AddAccount.css';
import BankAccount from './BankAccount';
import { ACCOUNT_TYPES } from '../../assets/consts/enums';


export default function AddAccount() {
  const [accountName, setAccountName] = useState('');
  const [accountType, setAccountType] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [currentAmount, setCurrentAmount] = useState(0);
  const [personalRateOfReturn, setPersonalRateOfReturn] = useState(0);

  const dispatch = useDispatch();
  const onSaveBtnClick = () => {
    dispatch(saveAccount({
      accountName,
      accountType,
      bankName,
      accountNumber,
      currentAmount,
      personalRateOfReturn
    }));
  }
  const renderFormForAccountType = (accountType) => {
    switch ((accountType)) {
      case 1: // Chequing
      case 2: // Savings
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
              <Form.Control as="select" custom data-testid="bankTypeSelector" onChange={(e) => setAccountType(parseInt(e.target.value))} value={accountType}>
                <option>Select the type of account</option>
                {
                  Object.keys(ACCOUNT_TYPES).map((acType) => {
                    return (<option data-testid="bankType-{actype}" key="account-type-{acType}" value={acType}>{ACCOUNT_TYPES[acType]}</option>)
                  })
                }
              </Form.Control>
            </Col>
          </Form.Group>
          {renderFormForAccountType(accountType)}
          <Button variant="primary" onClick={() => onSaveBtnClick()}>Save</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

