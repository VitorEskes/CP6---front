import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importando ícones das redes sociais

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col>
            <p>Loja de Produtos © 2024 - Todos os direitos reservados.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex justify-content-center">
              <a href="https://facebook.com" className="text-white mx-2" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-white mx-2" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="text-white mx-2" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
