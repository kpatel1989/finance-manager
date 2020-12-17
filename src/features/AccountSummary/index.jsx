import React from 'react';
import {
  Card, Table,
} from 'react-bootstrap';

function AccountSummary() {
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

          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
export default AccountSummary;
