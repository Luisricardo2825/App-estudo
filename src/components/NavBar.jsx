import React from 'react';
import {
  Navbar, Form, Nav, FormControl, Button,
} from 'react-bootstrap';
import './css/home.css';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" className="mb-0">
      <Navbar.Brand href="#home"><img src="/IMG/logo-nav.png" className="rounded" alt="..." width="85" height="32" /></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
}

export default NavBar;
