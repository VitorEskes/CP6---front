import React from 'react';
import { Table, Container } from 'react-bootstrap';

function PriceTable() {
    return (
        <Container>
            <h3 className="my-4 text-center">Tabela de Preços</h3>
            <Table striped bordered hover responsive className="text-center">
                <thead className="table-dark">
                    <tr>
                        <th>Produto</th>
                        <th>Categoria</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Chaveiro - Mestre Yoda</td>
                        <td>Acessórios</td>
                        <td>R$ 39,90</td> {/* Preço ajustado */}
                    </tr>
                    <tr>
                        <td>Action figure - Shikamaru</td>
                        <td>Bonecos</td>
                        <td>R$ 59,90</td> {/* Preço ajustado */}
                    </tr>
                    <tr>
                        <td>Episodio 1 - One Piece</td>
                        <td>Livro</td>
                        <td>R$ 69,90</td> {/* Preço ajustado */}
                    </tr>
                    <tr>
                        <td>Funko Pop Groot</td>
                        <td>Bonecos</td>
                        <td>R$ 149,90</td> {/* Preço ajustado */}
                    </tr>
                    <tr>
                        <td>Funko Pop Aang</td>
                        <td>Bonecos</td>
                        <td>R$ 109,90</td> {/* Mantido */}
                    </tr>
                    <tr>
                        <td>Funko Pop Itachi Uchiha</td>
                        <td>Bonecos</td>
                        <td>R$ 99,90</td> {/* Preço ajustado */}
                    </tr>
                    <tr>
                        <td>Funko Pop Coringa</td>
                        <td>Bonecos</td>
                        <td>R$ 99,90</td> {/* Preço ajustado */}
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default PriceTable;
