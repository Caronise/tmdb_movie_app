import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

export default function Body() {

  return (
    <Container>
      <Row>
        <Col className="left" xs={8}>1 of 2 (wider)</Col>
        <Col className="right">2 of 2</Col>
      </Row>
    </Container>

  );
};