import React from 'react';
import {
  Card, Table,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectAllAccounts } from '../../store/reducers/Account';

function AccountSummary() {

  const accounts = useSelector(selectAllAccounts);

  return (
    <Card align="left">
      <Card.Body>
        <Card.Title>Account Summary</Card.Title>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Account Name</th>
              <th>Type</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {
              accounts.map(a => {
                return (
                  <tr>
                    <td>{a.accountId}</td>
                    <td>{a.accountName}</td>
                    <td>{a.accountType}</td>
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
