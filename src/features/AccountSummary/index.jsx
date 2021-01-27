import React, { useEffect } from 'react';
import {
  Card, Table,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllAccounts, accountLoadStatus, fetchAllAccounts } from '../../store/reducers/Account';
import { ACCOUNT_TYPES } from '../../assets/consts/enums';


function AccountSummary() {
  const dispatch = useDispatch();
  const accounts = useSelector(selectAllAccounts);
  const status = useSelector(accountLoadStatus)
  useEffect(() => {
    if (status === 'idle')
      dispatch(fetchAllAccounts());
  });


  return (
    <Card align="left">
      <Card.Body>
        <Card.Title>Account Summary</Card.Title>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Account Name</th>
              <th>Type</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {
              accounts.map(a => {
                return (
                  <tr key={a.id}>
                    <td>{a.accountName} </td>
                    <td>{ACCOUNT_TYPES[a.accountType]}</td>
                    <td>{a.currentAmount}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
export default AccountSummary;
