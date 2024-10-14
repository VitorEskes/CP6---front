import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselComponent() {
    const images = [
      { 
        src: 'https://static.nerdstore.com.br/bnn/l_nerdstore/2024-10-11/930_Hero306x582.png', 
        alt: 'Imagem 1', 
        title: 'Desconto Imperdível!', 
        description: 'Aproveite 40% de desconto em todos os Funko! Não perca essa chance de completar sua coleção.'
      },
      { 
        src: 'https://static.nerdstore.com.br/bnn/l_nerdstore/2024-10-08/2480_Heropix.png', 
        alt: 'Imagem 2', 
        title: 'Desconto no PIX!', 
        description: 'Pague com PIX e ganhe 10% de desconto em sua compra. Uma oportunidade única para economizar!'
      },
      { 
        src: 'https://criticalhits.com.br/wp-content/uploads/2019/02/ws-Naruto.jpg', 
        alt: 'Imagem 3', 
        title: 'Anime em Alta!', 
        description: 'Junte-se a Naruto e os Piratas de One Piece em uma jornada épica com nossos produtos exclusivos.'
      },
      { 
        src: 'https://static.nerdstore.com.br/bnn/l_nerdstore/2024-09-25/3244_Hero1306x582.png', 
        alt: 'Imagem 4', 
        title: 'Coleção RPG', 
        description: 'Descubra nossa coleção de produtos de RPG e viva suas aventuras favoritas com estilo e criatividade.'
      },
      { 
        src: 'https://falaanimal.com.br/wp-content/uploads/2024/07/dcallin3_17072024.jpg', 
        alt: 'Imagem 5', 
        title: 'Mundo da DC Comics', 
        description: 'Explore o universo da DC Comics com produtos inspirados em seus heróis e vilões favoritos.'
      },
      { 
        src: 'https://static.nerdstore.com.br/bnn/l_nerdstore/2024-10-11/4765_Hero1306x582.png', 
        alt: 'Imagem 6', 
        title: 'Ilha Infantil', 
        description: 'Bem-vindo à nossa sessão de produtos infantis! Descubra brinquedos e acessórios que trazem diversão e aventura.'
      },
      { 
        src: 'https://wallpapers-clan.com/wp-content/uploads/2023/11/star-wars-darth-vader-in-the-rain-desktop-wallpaper-preview.jpg', 
        alt: 'Imagem 7', 
        title: 'Guerra nas Estrelas', 
        description: 'Mergulhe na saga épica de Star Wars com nossa linha de produtos que traz a Força até você.'
      },
      { 
        src: 'https://wallpapers.com/images/hd/league-of-legends-hd-mi87lchw5djeodqn.jpg', 
        alt: 'Imagem 8', 
        title: 'Desafios de Summoner', 
        description: 'Encare os desafios de League of Legends com nossos produtos oficiais e torne-se um verdadeiro "Challenger"!'
      },
    ];
  
    return (
      <Carousel style={{ maxWidth: '1200px', margin: '0 auto', marginTop: '20px', marginBottom: '20px' }}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 rounded"
              src={image.src}
              alt={image.alt}
              style={{ maxHeight: 'auto', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>{image.title}</h3> {/* Título da imagem */}
              <p>{image.description}</p> {/* Descrição da imagem */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
  
  export default CarouselComponent;