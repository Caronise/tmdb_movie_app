import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

export default function Header() {

  return (
    <Container>
      <Row>
        <Col className="logo-area">1 of 2</Col>
        <Col className="search-area">2 of 2</Col>
      </Row>
    </Container>

  );
}

