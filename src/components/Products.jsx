import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function Products() {
  const bestSellers = [
    { title: 'Chaveiro - Mestre Yoda', text: 'Chaveiro Funko Pocket Pop Star Wars Mestre Yoda.', imgSrc: 'https://static.nerdstore.com.br/produtos/chaveiro-funko-pocket-pop-star-wars-mestre-yoda/06/60H-0134-006/60H-0134-006_zoom1.jpg?ts=1721670902&ims=326x' },
    { title: 'Action figure - Shikamaru', text: 'Action figure Shikamaru - naruto Shippuden', imgSrc: 'https://i.pinimg.com/736x/1d/fa/10/1dfa10070cf22487a2dc2253650992ca.jpg' },
    { title: 'Ep1 - One Piece', text: 'Livro capa dura Episodio 1 - One Piece', imgSrc: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2023/06/one_piece_vol_1_qual_a_diferenca_entre_manga_e_anime_nerdbunker__kyz2aq0v-760x760.jpg' },
  ];

  const funkoPops = [
    { title: 'Funko Pop Groot', text: 'Boneco Funko Pop! Marvel 85 Anos - Groot como Homem de Ferro', imgSrc: 'https://static.nerdstore.com.br/produtos/boneco-funko-pop!-marvel-85-anos-groot-como-homem-de-ferro/92/EJC-0633-792/EJC-0633-792_zoom1.jpg?ts=1724408407&ims=326x' },
    { title: 'Funko Pop Aang', text: 'Boneco Funko POP! Avatar: A Lenda de Aang - Aang Flutuando', imgSrc: 'https://static.nerdstore.com.br/produtos/boneco-funko-pop!-avatar:-a-lenda-de-aang-aang-flutuando/92/EJC-0344-792/EJC-0344-792_zoom1.jpg?ts=1721211450&ims=326x' },
    { title: 'Funko Pop Itachi Uchiha', text: 'Funko Itachi Uchiha com Double Mangekyō Sharingan', imgSrc: 'https://static.nerdstore.com.br/produtos/funko-itachi-uchiha-com-double-mangekyo-sharingan-pop!/92/EJC-0591-792/EJC-0591-792_zoom1.jpg?ts=1724408368&ims=326x' },
    { title: 'Funko Pop Coringa', text: 'Funko Coringa com Dentadura, POP! Heroes', imgSrc: 'https://static.nerdstore.com.br/produtos/funko-coringa-com-dentadura-pop!-heroes/92/EJC-0601-792/EJC-0601-792_zoom1.jpg?ts=1724408377&ims=326x' },
  ];


  return (
    <Container>
      {/* Seção de Produtos Mais Vendidos */}
      <h4 className="my-4">Produtos Mais Vendidos</h4>
      <Row>
        {bestSellers.map((product, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="product-card">
              <Card.Img variant="top" src={product.imgSrc} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.text}</Card.Text>
                <Button variant="dark">Comprar</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Seção de Funko Pop */}
      <h4 className="my-4">Funko Pop</h4>
      <Row>
        {funkoPops.map((product, index) => (
          <Col key={index} md={3} className="mb-4">
            <Card className="product-card">
              <Card.Img variant="top" src={product.imgSrc} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.text}</Card.Text>
                <Button variant="dark">Comprar</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
