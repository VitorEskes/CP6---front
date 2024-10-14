import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#" className="fw-bold d-flex align-items-center">
          <img
            alt="logo"
            src='https://cdn-icons-png.flaticon.com/512/6581/6581038.png'
            width="50"
            height="50"
            className="d-inline-block align-top me-2"
          />
          <span className="text-white">NERDEV</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="mx-2">Início</Nav.Link>
            <Nav.Link href="#" className="mx-2">Produtos</Nav.Link>
            <Nav.Link href="#" className="mx-2">Contato</Nav.Link>
          </Nav>
          <Form className="d-flex mx-3">
            <FormControl
              type="search"
              placeholder="Buscar produtos"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">
              <FaSearch />
            </Button>
          </Form>
          <Nav>
            <Nav.Link href="#" className="d-flex align-items-center">
              <FaShoppingCart size={20} className="me-2" />
              Carrinho
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
