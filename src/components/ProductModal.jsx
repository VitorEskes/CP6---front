import React, { useState } from 'react';
import { Modal, Button, Image, Container, Row, Col } from 'react-bootstrap';

function ModalComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="d-flex align-items-center justify-content-center my-4">
      <Row>
        <Col className="text-center">
          <Button variant="info" onClick={handleShow} aria-label="Mostrar promoção da semana">
            Promoção da Semana
          </Button>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose} centered aria-labelledby="modal-title">
        <Modal.Header closeButton>
          <Modal.Title id="modal-title">Promoção Especial!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image 
            src="https://static.nerdstore.com.br/bnn/l_nerdstore/2024-10-11/930_Hero306x582.png" 
            fluid 
            alt="Promoção de produtos Funko" 
            className="mb-3" 
          />
          <h5>Aproveite 40% de desconto na linha de produtos FUNKOS</h5>
          <p>Não perca essa oportunidade única! Visite nossa loja e confira os itens em promoção.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" href="/loja">
            Ver Produtos
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ModalComponent;
