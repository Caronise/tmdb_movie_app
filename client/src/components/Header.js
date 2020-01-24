import React from 'react';
import {
  Navbar,
  Image,
} from 'react-bootstrap';

export default function Header() {

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <img
          alt=""
          src="../images/PrimaryLogo_Green.png"
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{' '}
        React Bootstrap
      </Navbar.Brand>
    </Navbar>
  );
}

