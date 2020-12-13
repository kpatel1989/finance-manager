import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AccountSummary from '../AccountSummary';
import AddAccount from '../AddAccount';

function Home() {
  return (
    <Container fluid className="mt-3">
      <Row>
        <Col md="8">
          <AccountSummary />
        </Col>
        <Col md="4">
          <AddAccount />
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
